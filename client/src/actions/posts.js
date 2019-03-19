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
    return dispatch => {
        dispatch(requestFetch())
        axios
            .get(API_URL+`/posts/`)
            .then(res => {
                if(res.status===200){
                    dispatch(receiveFetch(res.data));
                }else{
                    dispatch(errorFetch(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
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
    return dispatch => {
        dispatch(requestFetch(id))
        return axios
            .get(API_URL+`/posts/${id}`)
            .then(res => {
                if(res.status===200){
                    dispatch(receiveFetch(res.data));
                }else{
                    dispatch(errorFetch(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
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
    return dispatch => {
        dispatch(requestAdd(post))
        axios
            .post(API_URL+`/posts/`, post)
            .then(res => {
                if(res.status===201){
                    dispatch(receiveAdd(res.data));
                    history.push(`/${res.data.id}`);
                }else{
                    dispatch(errorAdd(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
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
    return dispatch => {
        dispatch(requestUpdate(post))
        axios
            .put(API_URL+`/posts/${post.id}`, post)
            .then(res => {
                if(res.status===200){
                    dispatch(receiveUpdate(res.data));
                    history.push(`/${post.id}`);
                }else{
                    dispatch(errorUpdate(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
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
    return dispatch => {
        dispatch(requestDelete(id))
        axios
            .delete(API_URL+`/posts/${id}`)
            .then(res => {
                if(res.status===200){
                    dispatch(receiveDelete(id));;
                    history.push('/');
                }else{
                    dispatch(errorDelete(res.data.error));
                    return Promise.reject(res.data);
                }
            })
            .catch(err => console.log(err));
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
