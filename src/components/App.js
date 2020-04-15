import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import BookList from './BookList';
import Footer from './Footer';
import fetchBookList from '../services/apiGoogleBooks';

import { GlobalStyle } from './styles/global-styles';
import light from './styles/themes/light';
import colored from './styles/themes/colored';

const App = () => {
  const [bookQuery, setBookQuery] = useState('');
  const [bookList, setBookList] = useState([]);
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? colored : light);
  }

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
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header getBookQuery={onBtnSearchClick} toggleTheme={toggleTheme}/>
        {bookList.length < 1 ? (
          <h3 style={{ paddingLeft: '50px', textShadow: '7px 7px 10px #ff000029'}}>
            let's help Dennis pick a new book!
          </h3>
        ) : (
          <BookList bookList={bookList} />
        )}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;