import React, { useState } from "react";

const EnquireContext = React.createContext({
  btnClicked: false,
  onEnquire: () => {},
  onReturn: () => {},
});

export const EnquireContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onEnquireClickHandler = () => {
    setIsClicked(true);
  };

  const onReturnClickHandler = () => {
    setIsClicked(false);
  };

  return (
    <EnquireContext.Provider
      value={{
        btnClicked: isClicked,
        onEnquire: onEnquireClickHandler,
        onReturn: onReturnClickHandler,
      }}
    >
      {props.children}
    </EnquireContext.Provider>
  );
};

export default EnquireContext;
