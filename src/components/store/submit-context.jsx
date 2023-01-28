import React, { useState } from "react";

const SubmitContext = React.createContext({
  btnClicked: false,
  onSubmit: () => {},
  onSubmitOther: () => {},
});

export const SubmitContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onSubmitClickHandler = () => {
    setIsClicked(true);
  };

  const onSubmitOtherClickHandler = () => {
    setIsClicked(false);
  };

  return (
    <SubmitContext.Provider
      value={{
        btnClicked: isClicked,
        onSubmit: onSubmitClickHandler,
        onSubmitOther: onSubmitOtherClickHandler,
      }}
    >
      {props.children}
    </SubmitContext.Provider>
  );
};

export default SubmitContext;
