import React from 'react';
import EditPost from '../containers/EditPost';

export default (props) => {
    return (
        <>
            <EditPost postID={Number(props.match.params.id)} />
        </>
    );
}