import React, { Component } from 'react';
import { FaSearch, FaTv } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import {
  Form,
  ButtonSubmit,
  ListMoviesSeries,
  TypeSelected,
  Option,
  Empty,
  ShowMore,
} from './styles';

import { searchMoviesOrSeries } from '../../services/MoviesSeriesService';

class Main extends Component {
  state = {
    text: '',
    type: '',
    moviesSeries: [],
    page: 1,
    loadingList: false,
    loading: false,
    totalResults: 0,
    empty: false,
  };

  loadData = async () => {
    const { text, type } = this.state;
    this.setState({ loading: true });
    const moviesOrSeries = await searchMoviesOrSeries(text, type);
    if (moviesOrSeries.Response === 'True') {
      this.setState({
        moviesSeries: moviesOrSeries.Search,
        totalResults: moviesOrSeries.totalResults,
        empty: false,
        loading: false,
      });
    } else {
      this.setState({
        empty: true,
        moviesSeries: moviesOrSeries,
        loading: false,
      });
    }
  };

  showMore = async () => {
    const { text, type, moviesSeries, page } = this.state;
    this.setState({ page: page + 1, loadingList: true });
    const moviesOrSeries = await searchMoviesOrSeries(text, type, page + 1);
    if (moviesOrSeries.Response === 'True') {
      this.setState({
        moviesSeries: [...moviesSeries, ...moviesOrSeries.Search],
        loadingList: false,
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
      loadingList,
      loading,
      totalResults,
      empty,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

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
              <>
                {!loadingList ? (
                  <ShowMore onClick={() => this.showMore()} type="button">
                    Carregar Mais
                  </ShowMore>
                ) : (
                  <Loading size="small" />
                )}
              </>
            )}
          </ListMoviesSeries>
        )}

        {empty && <Empty>Nenhum Registro encontrado</Empty>}
      </Container>
    );
  }
}

export default Main;
