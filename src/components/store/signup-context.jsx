import React, { useState } from "react";

const SignUpContext = React.createContext({
  btnClicked: false,
  onSignUp: () => {},
  onReturn: () => {},
});

export const SignUpContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onSignUpClickHandler = () => {
    setIsClicked(true);
  };

  const onReturnClickHandler = () => {
    setIsClicked(false);
  };

  return (
    <SignUpContext.Provider
      value={{
        btnClicked: isClicked,
        onSignUp: onSignUpClickHandler,
        onReturn: onReturnClickHandler,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
