import React, { Component } from 'react';
import Posts from '../containers/Posts';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PropTypes from 'prop-types';
import {
    Title
} from '../styles';

class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <>
                <Title>All posts</Title>
                <Posts posts={this.props.posts} />
            </>
        );
    }
}

PostsPage.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts || []
    }
}

const mapDispatchToProps = {
    fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);