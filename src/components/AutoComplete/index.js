/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';

// import { Container } from './styles';

class AutoComplete extends Component {
  renderItem = (item, isHighlighted) => (
    <div
      key={item.id}
      style={{ background: isHighlighted ? 'lightgray' : 'white' }}
    >
      {item.label}
    </div>
  );

  render() {
    return (
      <Autocomplete
        getItemValue={(item) => item.name}
        items={this.props.items}
        renderItem={this.renderItem}
        value={this.props.value}
        onChange={this.props.onChange}
        onSelect={this.props.onSelect}
      />
    );
  }
}

export default AutoComplete;
