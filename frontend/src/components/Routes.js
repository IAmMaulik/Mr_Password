import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css/App.css";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import NotFound404 from "./NotFound404";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound404} />
      </Switch>
    </Router>
  );
};

export default App;
