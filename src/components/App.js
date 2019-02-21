import React, { Component } from 'react';
import Characters from './characters/Characters';

class App extends Component {

  state = {
    currentPage: 1,
    totalPages: 25
  };

  updatePageForward = () => {
    const { currentPage, totalPages } = this.state;
    if(currentPage > totalPages - 1) return;
    this.setState({ currentPage: currentPage + 1 });
  }

  updatePageBackward = () => {
    const { currentPage } = this.state;
    if(currentPage < 2) return;
    this.setState({ currentPage: currentPage - 1 });
  }



  render() {
    const { currentPage, totalPages } = this.state;

    return (
      <>
        <p>{currentPage} of {totalPages}</p>
        <button onClick={this.updatePageBackward}>BACK</button>
        <button onClick={this.updatePageForward}>NEXT</button>
        <Characters />
      </>
    );
  }
}

export default App;
