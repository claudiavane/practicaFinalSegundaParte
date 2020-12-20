import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchBooks } from '../../actions/bookActions';
import Home from './Home';

const mapStateToProps = ({ book }) => ({ books: book.books, total: book.total, isLoading: book.isLoading });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchBooks,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
