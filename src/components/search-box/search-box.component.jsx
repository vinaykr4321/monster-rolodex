import React from 'react';
import './search-box.style.css';

export const SearchBox = (props) => {
    return <input className="search" type="search" placeholder="Type Here To Search" onChange={props.changeHandler} />
}