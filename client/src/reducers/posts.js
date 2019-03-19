import {
    ERROR,
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

const initialState = {
    posts: [],
    post: null,
    isFetching: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case POSTS_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case POSTS_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: action.payload
            }
        
        case POSTS_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case POST_FETCH_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        
        case POST_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                post: action.payload
            }
        
        case POST_FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        
        case POST_ADD_REQUEST:
            return {
                ...state
            }
        
        case POST_ADD_SUCCESS:
            return {
                ...state,
                post: action.payload
            }
        
        case POST_ADD_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case POST_UPDATE_REQUEST:
            return {
                ...state
            }
        
        case POST_UPDATE_SUCCESS:
            return {
                ...state,
                post: action.payload
            }
        
        case POST_UPDATE_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        case POST_DELETE_REQUEST:
            return {
                ...state
            }
        
        case POST_DELETE_SUCCESS:
            return {
                ...state,
                post: null
            }
        
        case POST_DELETE_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        case ERROR:
            return {
                ...state,
                err: action.payload
            }

        default:
            return state;
    }
}
