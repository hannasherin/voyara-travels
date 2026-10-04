import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
   <div className="search-bar">

      <input
        type="text"
        placeholder="Where do you want to go?"
      />

      <button>Search</button>

    </div>
  )
}

export default SearchBar
