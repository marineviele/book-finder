import React, { useState, useEffect } from "react";

import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';
import fetchBookList from "./services/apiGoogleBooks";

import './global.css';

const App = () => {
  const [bookQuery, setBookQuery] = useState([]);
  const [bookList, setBookList] = useState([]);


  const onBtnSearchClick = query => {
    setBookQuery(query);
  };
 
  useEffect( () => {
    if(bookQuery.length > 0) {
      updateBookList();
    }
  }, [bookQuery])

  const updateBookList = async () => {
    setBookList(await fetchBookList(bookQuery));
  }

  return (
    <div>
      <Header getBookQuery={onBtnSearchClick}/>
      <BookList bookList={bookList}/>
      <Footer/>
    </div>
  )
}

export default App;
