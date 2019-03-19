import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
    width: 45%;
    margin: 20px auto;

    &:hover {
        text-decoration: none;
    }
`;

const CardSingle = styled.div`
    width: 45%;
    margin: 20px auto
`

const Title = styled.h1`
    text-align: center;
    color: black;
    text-decoration: none;
`;

const Contents = styled.p`
    color: black;
    text-decoration: none;
    text-align: center;
`;

const cardBorder = {
    border: '1px solid black',
    borderRadius: '6px'
};

const ButtonHalf = styled.button`
    width: 50%;
    display: inline-block;
`;

const Buttons = styled.div`
    width: 100%;
`;

const Post = (props) => {
    return (
        <>
        {props.singlePost && <Card className="card" style={cardBorder}>
            <Title>{props.title}</Title>
            <Contents>{props.contents}</Contents>
            {props.singlePost &&
            <Buttons>
                <ButtonHalf onClick={props.editPost} className="btn btn-primary">EDIT</ButtonHalf>
                <ButtonHalf onClick={props.deletePost} className="btn btn-danger">DELETE</ButtonHalf>
            </Buttons>}
        </Card>}

        {!props.singlePost && <CardSingle className="card" style={cardBorder}>
            <Title>{props.title}</Title>
            <Contents>{props.contents}</Contents>
        </CardSingle>}
        </>
    );
}


Post.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    editPost: PropTypes.func,
    deletePost: PropTypes.func,
    title: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
    singlePost: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = {
    fetchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);