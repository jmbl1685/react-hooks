import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../AppContext';
import './ComponentTwo.css'

export default function ComponentTwo() {

  let [title, setTitle] = useState("Component Two");

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setTitle(`Component Two ${state.from}`);
  })

  const handleChangeName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const NameIsValid = name.trim("") === "" ? false : true;

    if (NameIsValid) {
      dispatch({
        type: "CHANGE_NAME",
        name: name,
        from: "[updated from component two]"
      });
    }
  }

  const handleChangeColor = () => {
    dispatch({
      type: "CHANGE_COLOR",
      color: "#E95F20",
      from: "[updated from component two]"
    });
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>Default Name: {state.name}</p>
      <p>Default Color: {state.color}</p>
      <form onSubmit={(event) => handleChangeName(event)}>
        <input type="text" id="name" name="name" />
        <input type="submit" value="Change name" />
      </form>
      <button onClick={() => handleChangeColor()}>Change BackgroundColor</button>
    </div>
  )
}