import React from 'react';

import { FooterThemed } from './styles';

const Footer = () => {
  return (
    <FooterThemed>
      <p>
        made for Dennis with &hearts; by &nbsp;
        <a
          href="https://github.com/marineviele"
          target="_blank"
          rel="noopener noreferrer"
        >
          marina
        </a>
        &nbsp;with beautiful logos and inspiration from Open Peeps&nbsp;
        <a
          href="https://www.openpeeps.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>by Pablo Stanley</em>
        </a>
      </p>
    </FooterThemed>
  );
};

export default Footer;
