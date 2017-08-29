import React, { Component } from 'react';
import './App.css';
require('bulma/css/bulma.css')

class App extends Component {
  render() {
    return (
      <div className="App container">
        <nav className="navbar">
          <div className="navbar-brand">
            <a className="navbar-item" href="http://bulma.io">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
          </div>
        </nav>
        <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column has-text-left">
              <h1 className="title">
                Register
              </h1>
              <form>
                <div className="field">
                  <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Email"/>
                    <span className="icon is-small is-left">
                      <i className="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="password" placeholder="Password"/>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input className="input" type="password" placeholder="Repeat Password"/>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-text-centered">
                    <a className="button is-primary is-large column is-fullwidth">Create an account</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default App;
