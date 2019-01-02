import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import './ComponentTwo.css'

export default function ComponentTwo() {

  let name = "Juan Manuel";

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    console.log(state)
  });

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => { dispatch({ type: "CHANGE-NAME", name: name }) }}>Change name</button>
      <input type="text"/>
      <button onClick={() => { dispatch({ type: "CHANGE-COLOR", color: name }) }}>Change BackgroundColor</button>
    </div>
  )

}