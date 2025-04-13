import React from 'react'

function searchBar({ searchTerm, setSearchTerm}) {
  return (
    <input
      type='text'
      placeholder='Search Expenses'
      className='mx-2 mt-4 px-2 py-2 border rounded w-full md:w-1/2'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default searchBar