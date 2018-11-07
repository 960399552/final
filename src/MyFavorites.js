import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyFavorites extends Component {
    render() {
        return (
            <div>
                <h1>My Favorites</h1>
                <p>
                    Here is content for My Favorites!
                </p>
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
)(MyFavorites);