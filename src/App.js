import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Home/>
        </Route>
        <Route exact path={"/login"}>
          <Login/>
        </Route>
        <Route exact path={"/register"}>
          <Register/>
        </Route>
        <Route exact path={"/profile/:username"}>
          <Profile/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
