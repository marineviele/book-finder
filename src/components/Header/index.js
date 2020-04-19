import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import SearchBar from '../SearchBar';

import { HeaderThemed, HeaderSearch } from './styles';
import smallLogo from '../../assets/icon_dennis_small.svg';
import colorLogo from '../../assets/icon-dennis-color.svg';

const Header = ({ getBookQuery, toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <HeaderThemed>
      <HeaderSearch>
        <h1>Dennis Book Finder</h1>
        <SearchBar getBookQuery={getBookQuery} />
        <img src={title === 'light' ? smallLogo : colorLogo} alt="logo" />
      </HeaderSearch>
      <Switch
        checked={title === 'colored'}
        onChange={toggleTheme}
        handleDiameter={22}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 1px 5px rgba(255, 0, 0, 0.6)"
        height={30}
        width={60}
        onColor={colors.secondary}
        offColor={colors.secondary}
        offHandleColor={colors.terciary}
        onHandleColor={colors.terciary}
        className="react-switch"
      />
    </HeaderThemed>
  );
};

export default Header;
