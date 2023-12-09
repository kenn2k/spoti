import styles from "./Register.module.css";
import UseInput from "../../UI/Input";
import { FormControlLabel } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userAuthActions } from "../../store/user-slice";
import { useHistory } from "react-router-dom";

function Register() {
  const dispatchFunc = useDispatch();
  const { push } = useHistory();
  const {
    value: name,
    hasError: invalidName,
    isValid: validName,
    inputValue: nameInputHandler,
    onBlurInput: nameBlurHandler,
    finallyState: nameFinallyState,
  } = UseInput((val) => val.trim() !== "");

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
    isValid: validPassword,
    inputValue: passwordInputHandler,
    onBlurInput: passwordBlurHandler,
    finallyState: passwordFinallyState,
  } = UseInput((val) => val.trim().length > 4);

  const signUpHandler = (event) => {
    event.preventDefault();
    const auth = getAuth();

    const userData = {
      email: email,
      password: password,
      name: name, // Добавьте имя пользователя в объект
    };

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(({ user }) => {
        console.log(user);
        dispatchFunc(
          userAuthActions.setUser({
            email: user.email,
            name: userData.name,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/");
      })
      .catch((error) => {
        console.error("Error during sign up:", error);
      });
    if (!validName) {
      return;
    }
    nameFinallyState("");
    emailFinallyState("");
    passwordFinallyState("");
  };

  let isFormValid = false;

  if (validName && validPassword && validEmail) {
    isFormValid = true;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={signUpHandler}>
          <div>
            <h2>Sign up with your email address</h2>
          </div>

          <input
            placeholder="Name"
            type="text"
            id="name"
            value={name}
            onBlur={nameBlurHandler}
            onChange={nameInputHandler}
          />
          {invalidName && (
            <p className={styles.error}>This field cannot be empty</p>
          )}

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

          <label>Date of Birth</label>
          <input type="date" placeholder="birth" />

          <FormControl>
            <FormLabel
              id="demo-row-radio-buttons-group-label"
              style={{ color: "white" }}
            >
              Gender
            </FormLabel>
            <RadioGroup
              style={{ color: "white" }}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio color="success" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="success" />}
                label="Male"
              />
              <FormControlLabel
                value="Non-binary"
                control={<Radio color="success" />}
                label="Non-binary"
              />
            </RadioGroup>
          </FormControl>
          <button className={styles.button} disabled={!isFormValid}>
            Sign Up
          </button>
          <p>
            Already have an account <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
