import {
    POSTS_FETCH_REQUEST,
    POSTS_FETCH_SUCCESS,
    POSTS_FETCH_FAILURE,
    POST_FETCH_REQUEST,
    POST_FETCH_SUCCESS,
    POST_FETCH_FAILURE,
    POST_ADD_REQUEST,
    POST_ADD_SUCCESS,
    POST_ADD_FAILURE,
    POST_UPDATE_REQUEST,
    POST_UPDATE_SUCCESS,
    POST_UPDATE_FAILURE,
    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAILURE
} from '../constants/actionTypes';
import axios from 'axios';
import { API_URL } from '../constants/config';
import { history } from '../';

export function fetchPosts(){
    return async dispatch => {
        try {
            dispatch(requestFetch())
            const posts = await axios.get(API_URL+`/posts/`);
            if(posts.status === 200){
                return dispatch(receiveFetch(posts.data));
            }else{
                dispatch(errorFetch(posts.data.error));
                return Promise.reject(posts.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(){
        return {
            type: POSTS_FETCH_REQUEST,
        }
    }

    function receiveFetch(posts){
        return {
            type: POSTS_FETCH_SUCCESS,
            payload: posts
        }
    }

    function errorFetch(err){
        return {
            type: POSTS_FETCH_FAILURE,
            payload: err
        }
    }
}

export function fetchPost(id){
    return async dispatch => {
        try {
            dispatch(requestFetch(id));
            const post = await axios.get(API_URL+`/posts/${id}`);
            if(post.status === 200){
                return dispatch(receiveFetch(post.data));
            }else{
                dispatch(errorFetch(post.data.error));
                return Promise.reject(post.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestFetch(id){
        return {
            type: POST_FETCH_REQUEST,
            payload: id
        }
    }

    function receiveFetch(post){
        return {
            type: POST_FETCH_SUCCESS,
            payload: post
        }
    }

    function errorFetch(err){
        return {
            type: POST_FETCH_FAILURE,
            payload: err
        }
    }
}

export function addPost(post){
    return async dispatch => {
        try {
            dispatch(requestAdd(post));
            const newPost = axios.post(API_URL+`/posts/`, post);
            if(newPost.status === 201){
                dispatch(receiveAdd(newPost.data));
                return history.push(`/${newPost.data.id}`);
            }else{
                dispatch(errorAdd(newPost.data.error));
                return Promise.reject(newPost.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestAdd(post){
        return {
            type: POST_ADD_REQUEST,
            payload: post
        }
    }

    function receiveAdd(post){
        return {
            type: POST_ADD_SUCCESS,
            payload: post
        }
    }

    function errorAdd(err){
        return {
            type: POST_ADD_FAILURE,
            payload: err
        }
    }
}


export function updatePost(post){
    return async dispatch => {
        try {
            dispatch(requestUpdate(post));
            const updatedPost = axios.put(API_URL+`/posts/${post.id}`, post);
            if(updatedPost.status === 200){
                dispatch(receiveUpdate(updatedPost.data));
                return history.push(`/${post.id}`);
            }else{
                dispatch(errorUpdate(updatedPost.data.error));
                return Promise.reject(updatedPost.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestUpdate(post){
        return {
            type: POST_UPDATE_REQUEST,
            payload: post
        }
    }

    function receiveUpdate(post){
        return {
            type: POST_UPDATE_SUCCESS,
            payload: post
        }
    }

    function errorUpdate(err){
        return {
            type: POST_UPDATE_FAILURE,
            payload: err
        }
    }
}

export function deletePost(id){
    return async dispatch => {
        try {
            dispatch(requestDelete(id));
            const deletedPost = axios.delete(API_URL+`/posts/${id}`);
            if(deletedPost.status === 200){
                dispatch(receiveDelete(id));;
                return history.push('/');
            }else{
                dispatch(errorDelete(deletedPost.data.error));
                return Promise.reject(deletedPost.data);
            }
        } catch(e) {
            console.log(e);
        }
    }


    function requestDelete(id){
        return {
            type: POST_DELETE_REQUEST,
            payload: id
        }
    }

    function receiveDelete(id){
        return {
            type: POST_DELETE_SUCCESS,
            payload: id
        }
    }

    function errorDelete(err){
        return {
            type: POST_DELETE_FAILURE,
            payload: err
        }
    }
}
