import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, fetchPost } from '../actions';
import {
    SubmitBtn,
    Title,
    FormComponent
} from '../styles';
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            contents: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addPost = this.addPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }
    
    componentDidMount() {
        if(!this.props.addForm){
            this.props.fetchPost(this.props.postID).then(_ => {
                this.setState({
                    title: this.props.title,
                    contents: this.props.contents
                });
            });
        }
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    addPost(e) {
        e.preventDefault();
        this.props.addPost({
            title: this.state.title,
            contents: this.state.contents
        });
    }

    updatePost(e) {
        e.preventDefault();
        this.props.updatePost({
            id: this.props.postID,
            title: this.state.title,
            contents: this.state.contents
        });
    }

    render() {
        return (
            <>
                <FormComponent onSubmit={this.props.addForm ? this.addPost : this.updatePost} className="card">
                    <Title>
                        {this.props.addForm && "Add post"}
                        {!this.props.addForm && "Update post"}
                    </Title>
                    
                    <input
                        type="text"
                        name="title"
                        placeholder="Post title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />

                    <input
                        type="text"
                        name="contents"
                        placeholder="Post contents"
                        onChange={this.handleChange}
                        value={this.state.contents}
                    />

                    <SubmitBtn
                        type="submit"
                        name="submit"
                        className="btn btn-primary"
                    />
                </FormComponent>
            </>
        );
    }
}

PostForm.propTypes = {
    title: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
    addForm: PropTypes.bool.isRequired,
    addPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        title: state.posts.post ? state.posts.post.title : '',
        contents: state.posts.post ? state.posts.post.contents : '',
    }
}

const mapDispatchToProps = {
    addPost,
    updatePost,
    fetchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);