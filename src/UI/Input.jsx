import { useState } from "react";

const UseInput = (validFunc) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);
  const isValueValid = validFunc(enteredValue);
  const IsValueInvalid = wasInputTouched && !isValueValid;

  const inputValue = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlurInput = () => {
    setWasInputTouched(true);
  };

  const finallyState = () => {
    setEnteredValue("");
    setWasInputTouched(false);
  };

  return {
    value: enteredValue,
    hasError: IsValueInvalid,
    isValid: isValueValid,
    inputValue,
    onBlurInput,
    finallyState,
  };
};

export default UseInput;
