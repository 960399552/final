import React, { Component } from 'react';
import './App.css';
import './topNav.css';
import './content.css';
import Search from'./Search';
import  MyFavorites from './MyFavorites';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">Event Searching</header>
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="login">Login</a>

            </div>

            <br></br>
            <body>
                <div className="searchBar">
                    <input type = "text" />
                    <button> search</button>
                </div>

                <div className="content">
                    <Router>
                        <div className="page-content">
                            <Switch>
                                <Route path="/Search" exact component={Search} />
                                <Route path="/MyFavorites" component={MyFavorites} />
                            </Switch>
                        </div>
                    </Router>
                </div>

                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
            </body>
        </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        test: state.testReducer.test,
    };
};

const mapDispatchToProps = { doTest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

