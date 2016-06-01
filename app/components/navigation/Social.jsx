import React, { Component } from 'react';

const facebook_path = require('../../images/Facebook.svg');

class Social extends Component{
  render() {
    return (
      <div>
        <ul className="social">
          <li><a href="https://twitter.com/intent/tweet?url=http://www.tamars.co.uk&text=Check%20out%20the%20TAMARS%20treatment&via=tamars_therapy" className="twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
          <li><a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftamars.co.uk" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
          <li><a href="https://plus.google.com/share?url=http://www.tamars.co.uk" className="googleplus" target="_blank"><i className="fa fa-google-plus"></i></a></li>
          <li><a href="http://www.linkedin.com/cws/share?url=http%3A%2F%2Ftamars.co.uk" className="linkedin" target="_blank"><i className="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    );
  }
};

export default Social;
