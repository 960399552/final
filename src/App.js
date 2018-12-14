import React, { Component } from 'react';
import logo from './css/logo.svg';
import './css/App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './js/Header';
import HomePage from './js/HomePage';
import Page1 from './js/Page1';
import Page2 from './js/Page2';
// import Mail from './Mail';
import ItemNavSidebar from './js/ItemNavSidebar';
import itemList from './js/itemList';
import axios from 'axios';


import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      banner: 'hello',
      isOpen: false,
        error: null,
        isLoaded: false,
        items: [],
    };
    // this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    console.log(this.props)
  }

  // buttonHandler() {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

    componentDidMount() {
        fetch("/java/Main.java")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
    let myBanner;

        //if (error) {
          //  return <div>Error: {error.message}</div>;
        //} else
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else if(this.state.isOpen) {
      myBanner = <Header banner={this.state.banner} />;
    }
    return (
      <Router>
        <div className="App">
          <Header banner={this.state.banner} />
          <section className="page-content">
            <Switch>
              <Route path="/page2" exact component={Page2} />
              <Route path="/page1" component={Page1} />
            </Switch>
          </section>

          <div className="container">
              <header className="container-header">
                <Route path="/" component={HomePage} />
              </header>
              <section className="main-section">
                <aside id="item-nav">
                  <Route path = "/" component={ItemNavSidebar} />
                </aside>
                <ul>
                  <Route path = "/" component={itemList} />
                </ul>
              </section>
              <div className="footer">
                  <p>@ Copyright 2008-2015</p>
                  <p>All rights reserved. Powered by FinalProject-Jupiter team</p>
              </div>
          </div>
//--------------------------------------------------------------------//
          <div className="lockin">


              <ul>
                  {items.map(item => (
                      <li key={item.name}>
                          {item.name} {item.price}
                      </li>
                  ))}
              </ul>
          </div>

            fetch('https://mywebsite.com/endpoint/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            }),
        });












        </div>
      </Router>
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
