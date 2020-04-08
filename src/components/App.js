import React, { useState, useEffect } from 'react';

import Header from './Header';
import BookList from './BookList';
import Footer from './Footer';
import fetchBookList from '../services/apiGoogleBooks';

import './global.css';

const App = () => {
  const [bookQuery, setBookQuery] = useState('');
  const [bookList, setBookList] = useState([]);

  const onBtnSearchClick = (query) => {
    setBookQuery(query);
  };

  useEffect(() => {
    if (bookQuery.length > 0) {
      updateBookList();
    }
  }, [bookQuery]);

  const updateBookList = async () => {
    setBookList(await fetchBookList(bookQuery));
  };

  return (
    <div>
      <Header getBookQuery={onBtnSearchClick} />
      {bookList.length < 1 ? (
        <h3 style={{ paddingLeft: '50px', textShadow: '7px 7px 10px #ff000029' }}>
          let's help Dennis pick a new book!
        </h3>
      ) : (
        <BookList bookList={bookList} />
      )}
      <Footer />
    </div>
  );
};

export default App;
