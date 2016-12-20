// src/components/CapybaraContainer.js
import React, { Component } from 'react';
import Capybara from './Capybara';

class CapybaraContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { hasBird: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    alert('click on the Capybara!');
  }

  handleClick() {
    let nextHasBird = !this.state.hasBird;
    this.setState({ hasBird: nextHasBird });
  }

  render() {
    let image, text;

    if (this.state.hasBird) {
      image = 'http://tinyurl.com/jjpbwn6';
      text = 'Capybara with bird friend!';
    } else {
      image = 'http://tinyurl.com/jefhp9q';
      text = 'Sleepy Capybara';
    }

    return (
      <div>
        <Capybara
          image={image}
          onClick={this.handleClick}
          text={text}
        />
      </div>
    );
  }
}

export default CapybaraContainer;
