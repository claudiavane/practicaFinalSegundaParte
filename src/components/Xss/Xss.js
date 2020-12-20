/* eslint-disable */
import React from 'react';
import serialize from 'serialize-javascript';

const response = [
  {
    id: 1,
    title: 'My Blog post 1...',
    content: '<p>This is a <strong>HTML</strong> code</p>',
  },
  {
    id: 2,
    title: 'My Blog post 2...',
    content: '<p>Alert: <script>console.log(1);</script></p>',
  },
  {
    id: 3,
    title: 'My Blog post 3...',
    content: `
        <p>
            <img onmouseover="alert('This site is not secure');"
            src="attack.jpg" />
        </p>`,
  },
];

const secureInitialState = serialize(response);

const removeXSSAttacks = (html) => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }
  html = html.replace(/ on\w+="[^"]*"/g, '');

  return { __html: html };
};

const Xss = () => {
  const posts = JSON.parse(secureInitialState);

  return (
    <div className="Xss">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            <strong>Insecure code</strong>
          </p>
          <p dangerouslySetInnerHTML={removeXSSAttacks(post.content)} />
        </div>
      ))}
    </div>
  );
};

export default Xss;
