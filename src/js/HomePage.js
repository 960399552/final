import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <p>
                    <span>Event</span>
                    <br />
                    <span> Recommendation</span>
                    {/*<br /> Recommendation*/}
                </p>

                {/*<header>Home Page</header>*/}
                {/*<p>*/}
                    {/*Here is my main page content <Link to="/page1/mail">Mail</Link>*/}
                {/*</p>*/}
                {/*<p>*/}
                    {/*<a href="https://reacttraining.com/react-router/web/guides/quick-start">Click me to find out more about routing</a>*/}
                {/*</p>*/}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    };
};

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);