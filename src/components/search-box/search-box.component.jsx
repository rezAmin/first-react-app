import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handlerChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handlerChange}
  />
)
