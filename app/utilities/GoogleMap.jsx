import React, { Component } from 'react';

class GoogleMap extends Component {

  getRatio(width, height) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  }

  render() {
    var ratio = {
      paddingTop: this.getRatio(this.props.width, this.props.height)
    };

    return (
      <div className={ 'google-map' } style={ ratio }>
        <iframe src={ this.props.src } width={ this.props.width } height={ this.props.height } frameBorder={ 0 } allowFullScreen></iframe>
      </div>
    );
  }
};

GoogleMap.defaultProps = {
  src : '',
  width: 1600,
  height: 900
};

export default GoogleMap;
