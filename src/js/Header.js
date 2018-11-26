import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doTest } from '../redux/actions';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1> Find Your Favorite!</ h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        testBanner: state.testReducer.test,
    };
};

const mapDispatchToProps = { doTest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);