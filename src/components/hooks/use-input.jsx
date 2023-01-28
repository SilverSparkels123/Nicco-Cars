import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const inputBlurHandler = () => {
    setIsInputClicked(false);
    setIsTouched(true);
  };

  const inputClickHandler = () => {
    setIsInputClicked(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
    setIsInputClicked(false);
  };

  return {
    value: enteredValue,
    inputClicked: isInputClicked,
    isValid: valueIsValid,
    hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler,
    inputClickHandler,
  };
};

export default useInput;
