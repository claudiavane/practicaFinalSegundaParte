import React, { Component } from 'react';
import Popup from 'react-popup';
import Helmet from 'react-helmet';

import './Book.css';

class Book extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      errors: {
        firstName: false,
        lastname: false,
      },
    };
  }

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const { firstName, lastName, email, phone } = this.state;

    this.setState({
      errors: {
        firstName: firstName === '',
        lastName: lastName === '',
      },
    });

    if (firstName !== '' && lastName !== '' && email !== '') {
      Popup.create({
        title: 'Person Information',
        content: (
          <div>
            <p>
              <strong>Name: </strong> {firstName} {lastName}
            </p>
            <p>
              <strong>Email: </strong> {email}
            </p>
            <p>
              <strong>Phone: </strong> {phone}
            </p>
          </div>
        ),
        buttons: {
          right: [
            {
              text: 'Close',
              action: (popup) => popup.close(),
            },
          ],
        },
      });
    }
  };

  render() {
    return (
      <>
        <Helmet
          title="Person Information"
          meta={[
            {
              name: 'title',
              content: 'Person Information',
            },
            {
              name: 'description',
              content: 'Este es un ejemplo de Helmet',
            },
          ]}
        />
        <div className="Person">
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <p>
                <strong>First Name:</strong>
              </p>
              <p>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleOnChange}
                  className={this.state.errors.firstName ? 'error' : ''}
                />
                {this.state.errors.firstName && <div className="errorMessage">Required field</div>}
              </p>
            </div>
            <div>
              <p>
                <strong>Last Name:</strong>
              </p>
              <p>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleOnChange}
                  className={this.state.errors.lastName ? 'error' : ''}
                />
                {this.state.errors.lastName && <div className="errorMessage">Required field</div>}
              </p>
            </div>
            <div>
              <p>
                <strong>Email:</strong>
              </p>
              <p>
                <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange} />
              </p>
            </div>
            <div>
              <p>
                <strong>Phone:</strong>
              </p>
              <p>
                <input type="number" name="phone" value={this.state.phone} onChange={this.handleOnChange} />
              </p>
            </div>
            <p>
              <button type="submit">Save Information</button>
            </p>
          </form>
        </div>
        <Popup />
      </>
    );
  }
}

export default Book;
