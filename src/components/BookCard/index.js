import React from 'react';

import noCover from '../../assets/no_cover_01.svg';

import { BookCardThemed, BookCardHeader } from './styles';

const BookCard = ({
  title = 'No title provided.',
  authors = 'n/a',
  image = '#',
  infoLink = '#',
  description = 'No description provided.',
}) => {
  const transformMaxLengthData = (text, maxLength = 50) => {
    return text.length > maxLength
      ? text.slice(0, maxLength).concat(' (...)')
      : text;
  };

  if (image === '#') image = noCover;

  return (
    <BookCardThemed>
      <BookCardHeader>
        <a href={infoLink} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="book cover" width="120" />
        </a>

        <div>
          <a href={infoLink} target="_blank" rel="noopener noreferrer">
            <h3>{transformMaxLengthData(title, 50)}</h3>
          </a>
          <h4>by {authors}</h4>
        </div>
      </BookCardHeader>
      <p>{transformMaxLengthData(description, 200)}</p>
    </BookCardThemed>
  );
};

export default BookCard;
