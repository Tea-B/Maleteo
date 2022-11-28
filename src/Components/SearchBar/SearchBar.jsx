import React from 'react'

const SearchBar = ({setSearch}) => {

    const handleChange = (event) =>{
        const {value} = event.target;
        setSearch(value);
    }

  return (
    <div className="b__searcher">
        <img src="./Assets/Images/searcher-loaction-home" alt=""></img>
        <input
        placeholder="¿Donde te encuentras? Madrid, Barcelona"
        className="b-searcher__location"
        type="text"
        onChange={handleChange}
        ></input>
    </div>
  )
}

export default SearchBar
