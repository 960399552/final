import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit'
import {star} from 'react-icons-kit/fa/star'
import {heart} from 'react-icons-kit/fa/heart'
import {location} from "react-icons-kit/icomoon/location";


class HomePage extends Component {
    render() {
        return (
            <div>
                <ul id="item-list">
                    <li className="item">
                        <img alt="item image"
                             src="https://s3-media3.fl.yelpcdn.com/bphoto/EmBj4qlyQaGd9Q4oXEhEeQ/ms.jpg"/>
                        <div>
                            <a className="item-name" href="#">Item</a>
                            <p className="item-category">Vegetarian</p>
                            <div className="stars">
                                <Icon icon={star} />
                                <Icon icon={star} />
                                <Icon icon={star} />
                            </div>
                        </div>
                        <p className="item-address">699 Calderon Ave<br/>Mountain View<br/> CA</p>
                        <div className="fav-link">
                            <Icon icon={heart} />
                        </div>
                    </li>
                </ul>
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