import React, { Component } from 'react';
import GoogleMap from '../utilities/GoogleMap.jsx';
import Form from '../utilities/form/form.jsx';

const map_path = require('../images/Map2.svg');
const telephone_path = require('../images/Telephone.svg');
const mail_path = require('../images/Mail.svg');
const alarm_path = require('../images/Alarm.svg');

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="home-title-bar">
          <h1 className="container home-title">
            Contact Us
          </h1>
        </div>

        <div className="container">
          <div className="row contact-container">

            <div className="col-md-8 contact-map">
              <GoogleMap src="https://www.google.com/maps/embed/v1/place?q=21st+Century+Back+Care,+Main+Street,+Craigavon,+United+Kingdom&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU" />
            </div>

            <div className="col-md-4 contact-details">
              <h4>

                <div className="contact-details-info">
                  <img className="contact-details-image" src={map_path} alt="Map" />
                  <span>63 Main Street, Moira, Northern Ireland, BT67 0LQ</span>
                </div>

                <div className="contact-details-info">
                  <img className="contact-details-image" src={telephone_path} alt="Map" />
                  <span>02892610616</span>
                </div>

                <div className="contact-details-info">
                  <img className="contact-details-image" src={mail_path} alt="Map" />
                  <span>info@tamars.co.uk</span>
                </div>

                <div className="contact-details-opening-hours">
                  <img className="contact-details-image" src={alarm_path} alt="Map" />
                  <span>Opening hours:</span>
                  <div className="opening-times">
                    Mon - Fri: 9am - 6pm
                  </div>
                </div>

              </h4>
            </div>

          </div>
        </div>

        <div className="send-message">
          <div className="section-header text-center">
            Send Us A Message
          </div>
          <div className="section-content container">
            <Form />
          </div>
        </div>

      </div>
    );
  }
};

export default Contact;
