import React from 'react';

import SearchBar from '../SearchBar';

import smallLogo from '../../assets/icon_dennis_small.svg';
import './styles.css';

const Header = ({getBookQuery}) => {
  return (
    <header>
      <h1>Dennis Book Finder</h1>
      <SearchBar getBookQuery={getBookQuery}/>
      <img src={smallLogo} alt="logo"/>
    </header>
  )
}

export default Header;
