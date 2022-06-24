import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../actions/index";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const onClickHandler = () => {
    dispatch(getName(input));
  };



  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        name="input"
        autocomplete="off"
        onChange={(e) => inputHandler(e)}
      />
      <div>
        <button  onClick={() => onClickHandler()}>
          Search
        </button>
    
      </div>
    </div>
  );
};

export default SearchBar;