/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { AutoComplete } from '@react-md/autocomplete';
import './styles.scss';

const InputAutoComplete = (props) => (
  <AutoComplete
    id={props.id}
    name={props.name}
    label={props.label}
    placeholder={props.placeholder}
    data={props.data}
    onAutoComplete={props.onAutoComplete}
    onChange={props.onChange}
  />
);

InputAutoComplete.defaultProps = {
  label: '',
  placeholder: 'Search',
};

export default InputAutoComplete;
