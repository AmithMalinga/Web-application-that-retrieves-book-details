import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Discover Your Next <span className='book'>Favorite Book</span></h2><br />
                <p className='header-text fs-18 fw-3'>Explore a vast collection of books, from timeless classics to new bestsellers. Whether you're seeking inspiration, knowledge, or entertainment, your next great read is just a search away! Discover stories that will transport you to new worlds.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header