// eslint-disable-next-line
import { array, bool, func, number } from 'prop-types';
import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import HomeList from './HomeList';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  gotToDetail = (book) => {
    // const history = useHistory();
    console.log('Go to Detail!', book);
    // history.push({ // browserHistory.push should also work here
    // pathname: '/bookDetail',
    // state: { myData: book }
    // });
  };

  render() {
    const { books, isLoading, total } = this.props;
    return isLoading ? (
      <div className="Home">
        <h1>Cargando...</h1>
      </div>
    ) : (
      <div className="Home">
        <h1>Books Store</h1>
        <HomeList books={books} total={total} goToDetail={this.gotToDetail} />
      </div>
    );
  }
}

Home.propTypes = {
  fetchBooks: func,
  books: array,
  total: number,
  isLoading: bool,
};

export default Home;
