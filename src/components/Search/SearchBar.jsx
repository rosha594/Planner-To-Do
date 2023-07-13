import React from 'react'
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/SearchOutlined';


function SearchBar() {
  return (
    <div className='searchBar'>
      <input placeholder='Look for task...'/>
      <SearchIcon sx={{ fontSize: "2rem" }} className='searchIcon'/>
    </div>
  )
}

export default SearchBar