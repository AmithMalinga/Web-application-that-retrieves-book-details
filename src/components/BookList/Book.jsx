import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span className='bookTitle'>{book.title}</span>
          </div>
        </Link>
        <div className='book-data'>
          <div className='book-item-info-item author fs-15'>
            <span>by </span>
            <span className='bookAuthor'>{book.author.join(", ")}</span>
          </div>

          <div className='book-item-info-item edition-count fs-15'>
            <span>Total Editions: </span>
            <span>{book.edition_count}</span>
          </div>

          <div className='book-item-info-item publish-year fs-15'>
            <span>Published Year: </span>
            <span>{book.first_publish_year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
