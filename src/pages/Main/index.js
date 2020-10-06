import React, { Component } from 'react';
import { FaSearch, FaTv } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import {
  Form,
  ButtonSubmit,
  ListMoviesSeries,
  TypeSelected,
  Option,
  SpinnerPlus,
  NotFound,
} from './styles';

import { searchMoviesOrSeries } from '../../services/MoviesSeriesService';

class Main extends Component {
  state = {
    text: '',
    type: '',
    moviesSeries: [],
    page: 0,
    spinner: false,
    totalResults: 0,
    notfound: false,
  };

  loadData = async () => {
    const { text, type } = this.state;
    this.setState({ page: 1 });
    const moviesOrSeries = await searchMoviesOrSeries(text, type, 1);
    if (moviesOrSeries.Response === 'True') {
      this.setState({
        moviesSeries: moviesOrSeries.Search,
        totalResults: moviesOrSeries.totalResults,
        notfound: false,
      });
    } else {
      this.setState({ notfound: true });
    }
  };

  loadDataPlus = async () => {
    const { text, type, moviesSeries, page } = this.state;
    this.setState({ page: page + 1, spinner: true });
    const moviesOrSeries = await searchMoviesOrSeries(text, type, page + 1);
    if (moviesOrSeries.Response === 'True') {
      this.setState({
        moviesSeries: [...moviesSeries, ...moviesOrSeries.Search],
        spinner: false,
      });
    }
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleSelectType = (type) => {
    this.setState({ type });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.loadData();
  };

  render() {
    const {
      text,
      type,
      moviesSeries,
      spinner,
      totalResults,
      notfound,
    } = this.state;

    return (
      <Container>
        <h1>
          Inicio
          <FaTv />
        </h1>
        <p>Encontre filmes ou séries no filtro abaixo:</p>

        <TypeSelected>
          <Option
            onClick={() => this.handleSelectType('movie')}
            selected={type === 'movie'}
          >
            Filmes
          </Option>
          <Option
            onClick={() => this.handleSelectType('series')}
            selected={type === 'series'}
          >
            Séries
          </Option>
        </TypeSelected>

        <Form onSubmit={this.handleSubmit}>
          <input value={text} onChange={this.handleChange} />
          <ButtonSubmit disabled={text.length === 0 || type.length === 0}>
            <FaSearch />
          </ButtonSubmit>
        </Form>
        {moviesSeries.length > 0 && (
          <ListMoviesSeries>
            <strong>{moviesSeries.length} Registros</strong>
            {moviesSeries.map((i) => (
              <li key={i.imdbID}>
                <img src={`${i.Poster}`} alt={i.name} />
                <span>{i.Title}</span>
                <Link to={`/movies-series/${i.Title}`}>Detalhes</Link>
              </li>
            ))}

            {moviesSeries.length < totalResults && (
              <SpinnerPlus>
                {!spinner ? (
                  <button onClick={() => this.loadDataPlus()} type="button">
                    Carregar Mais
                  </button>
                ) : (
                  <img src="/assets/img/spinner.svg" alt="Loading" />
                )}
              </SpinnerPlus>
            )}
          </ListMoviesSeries>
        )}

        {notfound && (
          <NotFound>
            <h3>Nenhum Registro encontrado</h3>
          </NotFound>
        )}
      </Container>
    );
  }
}

export default Main;
