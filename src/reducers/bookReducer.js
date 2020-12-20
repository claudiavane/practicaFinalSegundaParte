import {
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
} from '../actions/actionTypes';
import { getNewState } from '../shared/utils/frontend';

const initialState = {
  books: [],
  total: 0,
  seletedBook: null,
  isLoading: false,
};

export default function bookReducer(state = initialState, action) {
  // verificar el tipo de accion y ejecutar una actualizacion del estado
  switch (action.type) {
    case FETCH_BOOKS_REQUEST: {
      // actualizar el estado
      return getNewState(state, {
        isLoading: true,
      });
    }
    case FETCH_BOOKS_SUCCESS: {
      const {
        payload: { books, total },
      } = action; // const posts = action.payload.posts
      return getNewState(state, {
        books,
        total,
        isLoading: false,
      });
    }
    case FETCH_BOOKS_ERROR: {
      return getNewState(state, {
        isLoading: false,
      });
    }
    case ADD_BOOK_SUCCESS: {
      const {
        payload: { book },
      } = action;
      const newBooks = [...state.books, book];
      return getNewState(state, {
        books: newBooks,
        selectedBook: book,
      });
    }
    case FETCH_BOOK_SUCCESS: {
      const {
        payload: { book },
      } = action;
      return getNewState(state, {
        selectedBook: book,
      });
    }
    case DELETE_BOOK_SUCCESS: {
      const {
        payload: { id },
      } = action;
      const filteredBooks = state.books.filter((book) => book.id !== id);
      return getNewState(state, {
        books: filteredBooks,
      });
    }
    case UPDATE_BOOK_SUCCESS: {
      const {
        payload: { updateBook },
      } = action;
      const index = state.books.findIndex((book) => book.id === updateBook.id);
      const filteredBooks = state.books.filter((book) => book.id !== index);
      filteredBooks.splice(index, 0, updateBook);
      return getNewState(state, {
        books: filteredBooks,
      });
    }
    default: {
      return state;
    }
  }
}
