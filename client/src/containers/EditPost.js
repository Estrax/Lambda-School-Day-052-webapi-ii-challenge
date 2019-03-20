import React from 'react';
import PostForm from '../components/PostForm';
import PropTypes from 'prop-types';

const EditPost = (props) => {
    return (
        <>
            <PostForm addForm={false} postID={props.postID} />
        </>
    );
}

EditPost.propTypes = {
    postID: PropTypes.number.isRequired
}

export default EditPost;