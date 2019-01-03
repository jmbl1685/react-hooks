import React, { useReducer, Fragment } from 'react';
import { AppContext } from './AppContext';

import ComponentOne from './components/componentOne/ComponentOne';
import ComponentTwo from './components/componentTwo/ComponentTwo';

export default function App() {

  let defaultData = {
    color: "#FFFFFF",
    name: "Juan Manuel",
    from: "",
  };

  const [state, dispatch] = useReducer((state, action) => {

    switch (action.type) {
      case "CHANGE_NAME":
        return { ...state, name: action.name, from: action.from };
      case "CHANGE_COLOR":
        return { ...state, color: action.color, from: action.from };
      default:
        return {};
    }

  }, defaultData);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Fragment>
        <ComponentOne></ComponentOne>
        <ComponentTwo></ComponentTwo>
      </Fragment>
    </AppContext.Provider>
  )
}
