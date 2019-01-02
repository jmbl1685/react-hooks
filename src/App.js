import React, { useReducer, Fragment } from 'react';
import { AppContext } from './AppContext';

import ComponentOne from './components/componentOne/ComponentOne';
import ComponentTwo from './components/componentTwo/ComponentTwo';

export default function App() {

  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "CHANGE-NAME":
        return { ...state, name: action.name };
      case "CHANGE-COLOR":
        return { ...state, color: action.color };
    };

  }, { color: "#FFFFFF", name: "Juan Manuel" });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Fragment>
        <ComponentOne></ComponentOne>
        <ComponentTwo></ComponentTwo>
      </Fragment>
    </AppContext.Provider>
  )
}
