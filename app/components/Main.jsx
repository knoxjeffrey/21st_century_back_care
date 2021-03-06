import React, { Component } from 'react';
import Header from './navigation/Header.jsx';
import Footer from './navigation/Footer.jsx';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main-content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
