import "./App.css";
import Home from "./components/Home/Home";
import SearchPage from "./pages/SearchPage";
import { Switch, Route } from "react-router-dom";
import LogIn from "./components/Registration/LogIn";
import Register from "./components/Registration/Register";
import ProfilePage from "./pages/ProfilePage";
import MobileLib from "./components/Home/Tracks/MobileLib";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/register" exact component={Register} />
      <Route path="/library" exact component={MobileLib} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/profile" exact component={ProfilePage} />
    </Switch>
  );
}

export default App;
