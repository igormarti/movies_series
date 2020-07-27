import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Container from '../../components/Container';
import {
  Form,
  ButtonSubmit,
  Checker,
  ListCharacters,
  Character,
} from './styles';

import { searchCharacter } from '../../services/CharacterService';

class Main extends Component {
  state = {
    nameCharacter: '',
    characters: [],
    character: {},
    found: false,
  };

  componentDidMount() {
    const characters = JSON.parse(localStorage.getItem('characters'));

    if (characters) {
      this.setState({ characters });
    }
  }

  componentDidUpdate(__, prevState) {
    const { characters } = this.state;
    if (prevState.characters !== characters) {
      // const values = _.uniqWith(characters, _.isEqual);
      localStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleChange = async (e) => {
    const nameCharacter = e.target.value;
    this.setState({ nameCharacter });
    const response = await searchCharacter(nameCharacter.trim());
    if (response.results.length) {
      this.setState({
        character: response.results[0],
        found: true,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { found, characters, character } = this.state;
    if (found) {
      const unique = _.uniqWith([...characters, character], _.isEqual);
      this.setState({
        found: false,
        nameCharacter: '',
        characters: unique,
        character: {},
      });
    }
  };

  render() {
    const { characters, character, nameCharacter, found } = this.state;

    return (
      <Container>
        <h1>
          Home
          <img src="assets/icons/marvel.svg" alt="icone vingadores" />
        </h1>
        <p>Search for marvel characters by name, type it in the field below:</p>

        <Form onSubmit={this.handleSubmit}>
          <input value={nameCharacter} onChange={this.handleChange} />
          <ButtonSubmit>Save</ButtonSubmit>
        </Form>
        {nameCharacter && (
          <Checker found={found}>
            {found
              ? `character is valid, click save`
              : `character is not valid`}
          </Checker>
        )}
        {character.id && (
          <Character>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <span>{character.name}</span>
          </Character>
        )}
        <ListCharacters>
          {characters.map((c) => (
            <li key={c.id}>
              <img
                src={`${c.thumbnail.path}.${c.thumbnail.extension}`}
                alt={c.name}
              />
              <span>{c.name}</span>
              <Link to={`/character/${c.id}`}>Details</Link>
            </li>
          ))}
        </ListCharacters>
      </Container>
    );
  }
}

export default Main;
