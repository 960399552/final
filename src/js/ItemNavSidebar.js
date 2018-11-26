import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit'
import {location} from 'react-icons-kit/icomoon/location'
import {star} from 'react-icons-kit/fa/star'
import {thumbsOUp} from 'react-icons-kit/fa/thumbsOUp'
import {tree} from 'react-icons-kit/icomoon/tree'
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <aside>
                <div className="nav-icon">
                    <Icon size={30} icon={tree} />
                </div>
                <nav className="main-nav">
                    <a href="#" id="nearby-btn" className="main-nav-btn active">
                        {/*<i className="fas fa-anchor"></i> Nearby*/}
                        <Icon icon={location} /> Nearby
                    </a>
                    <a href="#" id="fav-btn" className="main-nav-btn">
                        <Icon icon={star} /> My Favorites
                    </a>
                    <a href="#" id="recommend-btn" className="main-nav-btn">
                        <Icon icon={thumbsOUp} /> Recommendation
                    </a>
                </nav>
            </aside>
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