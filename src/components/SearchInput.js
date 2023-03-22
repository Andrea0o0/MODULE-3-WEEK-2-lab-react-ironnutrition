import Input from "antd/es/input/Input";
import React from "react";

export default function SearchInput(props) {

  const { handleSearchFood } = props;

  const handleChange = (e) => {
    handleSearchFood(e.target.value)
  }

  return (
    <div className='Search_container'> 
        <h3>Search Input</h3>
        <Input type="text" name="search" onChange={handleChange} placeholder="HII Search food here" />
    </div>
  )
}