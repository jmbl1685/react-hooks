import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import './ComponentOne.css'

export default function ComponentOne() {

  let [title, setTitle] = useState("Component One");
  let [name, setName] = useState("");

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    console.log(state)
  });

  const ChangeNameHandle = () => {
    dispatch({ type: "CHANGE-NAME", name: title });
    setTitle("Component One [updated]");
    setName("");
  }

  const ChangeColorHandle = () => {
    dispatch({ type: "CHANGE-COLOR", color: "#E95F20" });
    setTitle("Component One [updated]");
  }

  return (
    <div>
      <h1>{title}</h1>
      <form>
      
      </form>
      <button onClick={() => ChangeNameHandle()}>Change name</button>
      <input type="text" id="name" name="name" />
      <button onClick={() => ChangeColorHandle()}>Change BackgroundColor</button>
    </div>
  )
}