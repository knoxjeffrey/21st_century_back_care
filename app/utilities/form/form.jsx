var React = require('react');
var _ = require('underscore');
var Input = require('./input');
var TextArea = require('./text-area-input');
var Icon = require('./icon');

//var process = require('process');
//var sendgrid  = require('sendgrid')(process.env.SENDGRID_API);

module.exports = React.createClass({
  getInitialState: function () {
    return {
      email: null,
      personName: null,
      message: null,
      forbiddenWords: ["password", "user", "username"]
    }
  },

  saveAndContinue: function (e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email)
        && !_.isEmpty(this.state.personName);
        //&& !_.isEmpty(this.state.statesValue)

    if(canProceed) {
      var payload   = {
        to      : 'to@example.com',
        from    : 'from@other.com',
        subject : 'Saying Hi',
        text    : 'This is my first email through SendGrid'
      };

      //sendgrid.send(payload, function(err, json) {
        //if (err) { console.error(err); }
        //console.log(json);
      //});

    } else {
      console.log(process.env);
      console.log(process.env.SENDGRID_API);
      this.refs.email.isValid();
      this.refs.personName.isValid();
    }
  },

  handleNameInput: function(event) {
    this.setState({
      personName: event.target.value
    })
  },

  handleEmailInput: function(event){
    this.setState({
      email: event.target.value
    });
  },

  handleMessageInput: function(event) {
    this.setState({
      message: event.target.value
    })
  },

  validateEmail: function (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  },

  isEmpty: function (value) {
    return !_.isEmpty(value);
  },

  render: function() {
    return (
      <div className="send_message_section">

        <div className="send_message_form">
          <h1>We're here to help</h1>
          <p>Let us know what we can do to help and we'll get back to you as soon as possible</p>
          <form onSubmit={this.saveAndContinue}>

            <Input
              text="Email Address"
              ref="email"
              type="text"
              defaultValue={this.state.email}
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput}
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
            />

            <Input
              text="Name"
              ref="personName"
              validate={this.isEmpty}
              value={this.state.personName}
              onChange={this.handleNameInput}
              emptyMessage="Name can't be empty"
            />

            <TextArea
              rows="5"
              text="Message"
              ref="message"
              type="text"
              value={this.state.message}
              onChange={this.handleMessageInput}
            />

            <button
              type="submit"
              className="highlight">
              Send Message
            </button>

          </form>

        </div>

      </div>
    );
  }

});
