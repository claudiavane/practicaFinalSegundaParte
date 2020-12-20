import API from '../api/api';

const URL_BOOKS = '/books';

const getBooks = async () => {
  console.log('$$$$ ', URL_BOOKS);
  const response = await API.get(`${URL_BOOKS}`);
  console.log('$$$$ response ', response);
  if (response.error) {
    throw new Error('Ha ocurrido un error');
  }
  return response;
};

const addBook = async (book) => {
  const response = await API.book(`${URL_BOOKS}`, book);
  if (response.error) {
    throw new Error('No se a podido crear el libro');
  }
  return response;
};

const getBook = async (id) => {
  const response = await API.get(`${URL_BOOKS}/${id}`);
  if (response.error) {
    throw new Error('No se a podido obtener el libro');
  }
  return response;
};

const deleteBook = async (id) => {
  const response = await API.delete(`${URL_BOOKS}/${id}`);
  if (response.error) {
    throw new Error('Ha ocurrido un error al borrar el elemento');
  }
  return response;
};

const updateBook = async (book) => {
  const response = await API.put(`${URL_BOOKS}/${book.id}`, book);
  if (response.error) {
    throw new Error('Ha ocurrido un error al borrar el elemento');
  }
  return response;
};

export default {
  getBooks,
  getBook,
  addBook,
  deleteBook,
  updateBook,
};
