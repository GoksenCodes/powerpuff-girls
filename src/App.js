import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import ShowPage from "./pages/ShowPage";

const Home = () => <h1>Home</h1>;
const Other = () => <h1>Other</h1>;

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/other"}>Other</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={ShowPage} />
        <Route path="/other" component={Other} />
      </Switch>
    </div>
  );
}

export default App;
