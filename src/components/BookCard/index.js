import React from 'react';

import noCover from '../../assets/no_cover_01.svg';

import './styles.css';

const BookCard = ({
  title = 'No title provided.',
  authors = 'n/a',
  image = '#',
  infoLink = '#',
  description = 'No description provided.',
}) => {

  if(image === '#') image = noCover;

  if (title.length > 50) title = title.slice(0, 50).concat(' (...)');

  if (description.length > 50) {
    description = description.slice(0, 200).concat(' (...)');
  }
  return (
    <li id="book-card">
      <a href={infoLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="book cover" width="120"/>
      </a>

      <div id="info">
        <a href={infoLink} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
        <h4>by {authors}</h4>
      </div>
      <p>{description}</p>
    </li>
  );
};

export default BookCard;
