import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import Sticky from 'react-stickynode';

const logo_path = require('../../images/21_C_Logo.svg');

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      active: false
    };
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <Sticky enabled={true} activeClass="scrolled">

        <div className="header clearfix">
          <Link to="/">
            <div id="logo">
              <img src={logo_path} alt="21st Century Back Care" />
            </div>
          </Link>
        </div>

        <div className ={"pull-right hamburger" + (this.state.active ? " is-active" : "")} onClick={this.handleClick} >
          <div className="_layer -top"></div>
          <div className="_layer -mid"></div>
          <div className="_layer -bottom"></div>
        </div>

        <div className={"primary-nav" + (this.state.active ? " is-active" : "")} onClick={this.handleClick} >
          <div className="_wrapper">
            <ul className="_nav-list">
              <li className="home">
                <Link to="/" className="_nav-item -home active">Home</Link>
              </li>
              <li className="tamars">
                <Link to="/treatment" className="_nav-item -nav2 active">TAMARS</Link>
              </li>
              <li className="home">
                <Link to="/" className="_nav-item -nav3 active">And Another Nav</Link>
              </li>
              <li className="contact">
                <Link to="/contact" className="_nav-item -contact active">Contact</Link>
              </li>
            </ul>
    	    </div>
        </div>

      </Sticky>
    );
  }
}

export default Header;
