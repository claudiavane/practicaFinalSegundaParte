import { actions } from 'react-redux-form';
import PostService from '../services/PostService';
import { request, received, error } from '../shared/redux/baseActions';
import {
  ADD_POST_ERROR,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  UPDATE_POST_ERROR,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from './actionTypes';

export const fetchPosts = () => async (dispatch) => {
  dispatch(request(FETCH_POSTS_REQUEST));
  try {
    const response = await PostService.getPosts();
    dispatch(received(FETCH_POSTS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_POSTS_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const addPost = (post) => async (dispatch) => {
  dispatch(request(ADD_POST_REQUEST));
  try {
    const response = await PostService.addPost(post);
    dispatch(received(ADD_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(ADD_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const fetchPost = (id) => async (dispatch) => {
  dispatch(request(FETCH_POST_REQUEST));
  try {
    const response = await PostService.getPost(id);
    dispatch(received(FETCH_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const updatePost = (post) => async (dispatch) => {
  dispatch(request(UPDATE_POST_REQUEST));
  try {
    const response = await PostService.updatePost(post);
    dispatch(received(UPDATE_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(UPDATE_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch(request(DELETE_POST_REQUEST));
  try {
    const response = await PostService.deletePost(id);
    dispatch(received(DELETE_POST_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(DELETE_POST_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const resetPostForm = () => (dispatch) => {
  dispatch(actions.reset('postForm'));
};
