import React, { Component } from 'react';
import { connect } from 'react-redux';


class Search extends Component {
    render() {
        return (
            <div>
                <h1>Search</h1>
                <p>
                    Here is content for Search!
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
)(Search);