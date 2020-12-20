import { actions } from 'react-redux-form';
import BookService from '../services/BookService';
import { request, received, error } from '../shared/redux/baseActions';
import {
  ADD_BOOK_ERROR,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_ERROR,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_ERROR,
  FETCH_BOOK_REQUEST,
  FETCH_BOOK_SUCCESS,
  UPDATE_BOOK_ERROR,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
} from './actionTypes';

export const fetchBooks = () => async (dispatch) => {
  dispatch(request(FETCH_BOOKS_REQUEST));
  try {
    const response = await BookService.getBooks();
    dispatch(received(FETCH_BOOKS_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_BOOKS_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const addBook = (book) => async (dispatch) => {
  dispatch(request(ADD_BOOK_REQUEST));
  try {
    const response = await BookService.addBook(book);
    dispatch(received(ADD_BOOK_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(ADD_BOOK_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const fetchBook = (id) => async (dispatch) => {
  dispatch(request(FETCH_BOOK_REQUEST));
  try {
    const response = await BookService.getBook(id);
    dispatch(received(FETCH_BOOK_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(FETCH_BOOK_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const updateBook = (book) => async (dispatch) => {
  dispatch(request(UPDATE_BOOK_REQUEST));
  try {
    const response = await BookService.updateBook(book);
    dispatch(received(UPDATE_BOOK_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(UPDATE_BOOK_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  dispatch(request(DELETE_BOOK_REQUEST));
  try {
    const response = await BookService.deleteBook(id);
    dispatch(received(DELETE_BOOK_SUCCESS, response.data));
  } catch (err) {
    dispatch(error(DELETE_BOOK_ERROR));
    // eslint-disable-next-line
    console.log('AXIOS_ERROR: ', err);
  }
};

export const resetBookForm = () => (dispatch) => {
  dispatch(actions.reset('bookForm'));
};
