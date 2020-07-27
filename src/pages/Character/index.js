import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { detailCharacter } from '../../services/CharacterService';

import {
  Loading,
  DetailCharacter,
  DetailCharacterHeader,
  DetailCharacterContent,
  MultiList,
  List,
} from './styles';
import Container from '../../components/Container';

class Character extends Component {
  static propTypes = {
    match: propTypes.shape({
      params: propTypes.shape({
        id: propTypes.string,
      }),
    }).isRequired,
  };

  state = {
    character: {},
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const response = await detailCharacter(match.params.id);

    this.setState({ loading: false });
    if (response.results) {
      this.setState({ character: response.results[0] });
    }
  }

  render() {
    const { character, loading } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <h1>
          Character
          <img src="/assets/icons/marvel.svg" alt="avangers icon" />
        </h1>
        <Link to="/">back to home</Link>
        {character.id && (
          <>
            <DetailCharacter>
              <DetailCharacterHeader>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
                <span>{character.name}</span>
              </DetailCharacterHeader>
              <DetailCharacterContent>
                <p>{character.description}</p>
              </DetailCharacterContent>
            </DetailCharacter>

            <MultiList>
              <List>
                <h3>Comics</h3>
                {character.comics.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                  </li>
                ))}
              </List>
              <List>
                <h3>Series</h3>
                {character.series.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                  </li>
                ))}
              </List>
              <List>
                <h3>Stories</h3>
                {character.stories.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                  </li>
                ))}
              </List>
              <List>
                <h3>Events</h3>
                {character.events.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                  </li>
                ))}
              </List>
            </MultiList>
          </>
        )}
      </Container>
    );
  }
}

export default Character;
