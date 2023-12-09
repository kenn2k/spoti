import styles from "../Registration/LogIn.module.css";

import UseInput from "../../UI/Input";
import { userAuthActions } from "../../store/user-slice";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import React from "react";

const LogIn = React.memo(() => {
  const dispatchFunc = useDispatch();
  const { push } = useHistory();
  const {
    value: email,
    hasError: invalidEmail,
    isValid: validEmail,
    inputValue: emailInputHandler,
    onBlurInput: emailBlurHandler,
    finallyState: emailFinallyState,
  } = UseInput((val) => val.includes("@"));

  const {
    value: password,
    hasError: invalidPassword,
    //isValid: validPassword,
    inputValue: passwordInputHandler,
    onBlurInput: passwordBlurHandler,
    finallyState: passwordFinallyState,
  } = UseInput((val) => val.trim().length > 4);

  const signInHandler = (event) => {
    event.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatchFunc(
          userAuthActions.setUser({
            email: user.email,

            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/");
      })
      .catch((error) => {
        console.error("Error during sign up:", error);
      });

    if (!validEmail) {
      return;
    }

    emailFinallyState("");
    passwordFinallyState("");
  };

  //!
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={signInHandler}>
          <div>
            <h2>Sign In</h2>
          </div>

          <input
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onBlur={emailBlurHandler}
            onChange={emailInputHandler}
          />
          {invalidEmail && <p className={styles.error}>Must include @</p>}

          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onBlur={passwordBlurHandler}
            onChange={passwordInputHandler}
          />
          {invalidPassword && (
            <p className={styles.error}>Write more then 4 symbols</p>
          )}

          <button className={styles.button}>Sign In</button>
          <p>
            or <Link to="/register">register</Link>
          </p>
        </form>
      </div>
    </div>
  );
});
LogIn.displayName = "LogIn";
export default LogIn;
