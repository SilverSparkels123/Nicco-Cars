import React, { useState } from "react";

const LogInContext = React.createContext({
  loggedInData: {},
  isLoggedIn: false,
  onLogIn: () => {},
  onLogOut: () => {},
});

export const LogInContextProvider = (props) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [loggedInData, setLoggedInData] = useState({});

  const onLogInClickHandler = (data) => {
    setIsLogIn(true);
    setLoggedInData({ ...data });
  };

  const onLogOutClickHandler = () => {
    setIsLogIn(false);
    setLoggedInData({});
  };

  return (
    <LogInContext.Provider
      value={{
        loggedInData: loggedInData,
        isLoggedIn: isLogIn,
        onLogIn: onLogInClickHandler,
        onLogOut: onLogOutClickHandler,
      }}
    >
      {props.children}
    </LogInContext.Provider>
  );
};

export default LogInContext;
