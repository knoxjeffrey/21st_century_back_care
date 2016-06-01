import React, { Component } from 'react';
import { Router, Link } from 'react-router';

import Social from './social';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">

  			<div className="footer-left">
  				<p className="footer-links">
  					<Link to="/">Home</Link>
  					·
  					<Link to="/treatment">TAMARS</Link>
  					·
  					<Link to="/contact">Contact</Link>
  				</p>
  				<h4>21st Century Back Care &copy; 2015</h4>
  			</div>

  			<div className="footer-center"></div>

  			<div className="footer-right text-center">
  				<h4>Recommend</h4>
          <br/>
  				<div><Social /></div>
  			</div>

		  </footer>
    );
  }
}

export default Footer;
