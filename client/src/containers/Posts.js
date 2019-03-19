import React from 'react';
import Post from '../components/Post'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
    text-decoration: none !important;
`;


const Posts = (props) => {
    return (
        <>
            {props.posts.map((post, i) => 
                <StyledLink
                    to={`/${post.id}`}
                    key={post.id}
                >
                    <Post
                        key={i}
                        title={post.title}
                        contents={post.contents}
                        singlePost={false}
                    />
                </StyledLink>
            )}
        </>
    );
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired
}

export default Posts;