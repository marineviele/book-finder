import React from 'react';

import BookCard from '../BookCard';

import './styles.css';

const BookList = ({ bookList = [] }) => {
  const createList = () => {
    return bookList.map((item) => {
      if (!item.volumeInfo) return;

      const title = item.volumeInfo.title,
        image = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail || item.volumeInfo.imageLinks.smallThumbnail : '#',
        infolink = item.volumeInfo.infoLink,
        description = item.volumeInfo.description;
    
      let authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'n/a';

      return (
        <BookCard
          key={item.id}
          title={title}
          authors={authors}
          image={image}
          infoLink={infolink}
          description={description}
        />
      );
    });
  };

  return (
    <div id="book-list">
        <ul>{createList()}</ul>
    </div>
  ); 
};

export default BookList;
