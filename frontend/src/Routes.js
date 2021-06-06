import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import NotFound404 from "./routes/NotFound404";

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
