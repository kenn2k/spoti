import { useSelector } from "react-redux";

import LogIn from "./LogIn";
import Register from "./Register";
import Home from "../Home/Home";

function Auth() {
  const isMainShown = useSelector((state) => state.mainVis.isMainShown);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  return (
    <div>
      {isUserLoggedIn ? (
        <Home />
      ) : (
        <div>
          {isMainShown && <LogIn />} {!isUserLoggedIn && <Register />}
        </div>
      )}
    </div>
  );
}

export default Auth;
