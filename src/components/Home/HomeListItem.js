import React from 'react';
import { object } from 'prop-types';
// eslint-disable-next-line
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

import './HomeListItem.css';

const HomeListItem = ({ book, goToDetail }) => (
  <div className="HomeListItem">
    <Card>
      <CardImg top width="100%" src={book.image} alt="Book Image" />
      <CardBody>
        <CardTitle>Title: {book.title}</CardTitle>
        <CardSubtitle>Author: {book.authorName} </CardSubtitle>
        <CardText className="price">{book.price} $</CardText>
        <CardText className="description">{book.description}</CardText>
        <Button onClick={() => goToDetail(book)}> Go to article</Button>
      </CardBody>
    </Card>
  </div>
);

HomeListItem.propTypes = {
  book: object,
  goToDetail: object.func
};

export default HomeListItem;
