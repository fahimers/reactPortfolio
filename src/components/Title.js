import React, { Component } from 'react';
import { clearTimeout } from 'timers';

const TITLES = [
  'a web-developer',
  'a funny guy',
  'a constant learner',
  'a survivor.',
  'hardworking and reliable'
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {

    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);

    console.log('this.titleInterval', this.titleInterval);
  }



  render() {

    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'} > I am {title}</p>
    )
  }
}

export default Title;