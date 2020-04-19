import React, { useState } from 'react';

import { SearchBarForm, SearchButton } from './styles';
import SearchIcon from '../SearchIcon';

const SearchBar = ({ getBookQuery }) => {
  const [inputQuery, setInputQuery] = useState('');

  const onInputDoubleClick = () => setInputQuery('');
  const onInputChange = (e) => setInputQuery(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    getBookQuery(inputQuery);
  };

  return (
    <SearchBarForm onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Search by title, author or subject"
        value={inputQuery}
        onChange={onInputChange}
        onDoubleClick={onInputDoubleClick}
        aria-label="Search by title, author or subject"
        aria-required="true"
      />
      <SearchButton type="submit" aria-label="search button" aria-required="true">
        <SearchIcon/>
      </SearchButton>
    </SearchBarForm>
  );
};

export default SearchBar;
