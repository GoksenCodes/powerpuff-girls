import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import ShowPage from "./pages/ShowPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ShowPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
