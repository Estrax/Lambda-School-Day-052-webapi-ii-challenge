import React from 'react';
import Post from '../components/Post';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <>
            <Post
                key={props.post.id}
                id={props.post.id}
                title={props.post.title}
                contents={props.post.contents}
                editPost={props.editPost}
                deletePost={props.deletePost}
                singlePost={true}
            />
        </>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired
    }).isRequired,
    editPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
}

export default PostContainer;