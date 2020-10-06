import React, { Component } from 'react';
import { FaTv } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { detailMoviesOrSeries } from '../../services/MoviesSeriesService';

import {
  Loading,
  DetailCharacter,
  DetailCharacterHeader,
  DetailCharacterContent,
  OtherDetails,
  Title,
  Raiting,
} from './styles';
import Container from '../../components/Container';

class MovieSerie extends Component {
  static propTypes = {
    match: propTypes.shape({
      params: propTypes.shape({
        id: propTypes.string,
      }),
    }).isRequired,
  };

  state = {
    movieSerie: {},
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const response = await detailMoviesOrSeries(match.params.id);

    this.setState({ loading: false });
    if (response.Response === 'True') {
      this.setState({ movieSerie: response });
    }
  }

  render() {
    const { movieSerie, loading } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <h1>
          Detalhes
          <FaTv />
        </h1>
        <Link to="/">Voltar</Link>
        {movieSerie.imdbID && (
          <>
            <DetailCharacter>
              <DetailCharacterHeader>
                <img src={movieSerie.Poster} alt={movieSerie.Title} />
                <OtherDetails>
                  <Title>Titulo Original: {movieSerie.Title}</Title>
                  <Raiting>
                    <span>Nota</span>
                    {movieSerie.imdbRating}
                  </Raiting>
                  <p>
                    <strong>Gênero(s):</strong> {movieSerie.Genre}
                  </p>
                  <p>
                    <strong>Diretor:</strong> {movieSerie.Director}
                  </p>
                  <p>
                    <strong>Ano:</strong> {movieSerie.Year}
                  </p>
                </OtherDetails>
              </DetailCharacterHeader>
              <DetailCharacterContent>
                <p>Atores: {movieSerie.Actors}</p>
              </DetailCharacterContent>
            </DetailCharacter>
          </>
        )}
      </Container>
    );
  }
}

export default MovieSerie;
