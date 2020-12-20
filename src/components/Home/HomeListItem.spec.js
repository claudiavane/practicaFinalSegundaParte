import React from 'react';
import { shallow } from 'enzyme';

import HomeListItem from './HomeListItem';

const mockBook = {
  id: '98a76fb7-8638-4ec1-82ba-debc7a6952c5',
  title: 'Lorem Ipsum',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo enim odio, ac dignissim enim commodo et. Phasellus ante metus, mollis sit amet auctor non, dapibus aliquam nunc. Pellentesque accumsan sem ut ligula imperdiet, at pretium felis lacinia. Ut cursus accumsan tristique. Sed malesuada nulla at ullamcorper malesuada. Aliquam vel mattis massa. Proin fermentum ut ante ac lobortis. Suspendisse quis mattis turpis, vel facilisis sem. Curabitur dapibus felis mi, id pharetra dolor convallis non. Proin vel lacus eget sapien viverra ultricies sed quis nulla. Donec porta blandit hendrerit. Donec et tellus luctus, lobortis quam nec, facilisis quam. Nunc diam orci, ornare id metus sit amet, dapibus vestibulum risus. Mauris tristique pulvinar mauris vel facilisis.',
  user: '66907a5e-9299-4d9b-989f-c0934bdb1ca5',
  comments: [],
};

describe('HomeListItem Component', () => {
  const wrapper = shallow(<HomeListItem book={mockBook} />);

  it('should have a initial Rendered', () => {
    expect(wrapper.find('Card')).toHaveLength(1);
  });

  it('should have an image', () => {
    expect(wrapper.find('CardImg')).toHaveLength(1);
  });

  it('should have a text from book', () => {
    expect(wrapper.find('CardText').first().hasClass('description')).toBe(true);
  });
});
