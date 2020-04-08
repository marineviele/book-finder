import React, { useState } from 'react';

import searchIcon from '../../assets/iconmonstr-magnifier-4.svg';
import './styles.css';

const SearchBar = ({ getBookQuery }) => {
  const [inputQuery, setInputQuery] = useState('');

  const onInputClick = e => setInputQuery('');
  const onInputChange = e => setInputQuery(e.target.value);

  const onFormSubmit = e => {
    e.preventDefault();
    getBookQuery(inputQuery);
  };

  return (
    <form onSubmit={onFormSubmit} id="search-bar">
      <input
        type="text"
        placeholder="Search by title, author or subject"
        value={inputQuery}
        onChange={onInputChange}
        onDoubleClick={onInputClick}
      />
      <button type="submit">
        <img src={searchIcon} alt="searchButton" />
      </button>
    </form>
  );
};

export default SearchBar;
