import React from 'react';
import PropTypes from 'prop-types';

import HomeListItem from './HomeListItem';

import './HomeList.css';

const HomeList = ({ books, total, goToDetail }) => (
  <>
    {total === 0 ? (
      <div>No hay books disponibles.</div>
    ) : (
      <div className="HomeList">
        {books.map((book) => (
          <HomeListItem key={book.id} book={book} goToDetail={goToDetail} />
        ))}
      </div>
    )}
  </>
);

HomeList.propTypes = {
  books: PropTypes.array,
  total: PropTypes.number,
  goToDetail: PropTypes.func
};

export default HomeList;
