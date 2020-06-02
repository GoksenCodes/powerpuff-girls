import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import ShowPage from "./pages/ShowPage";
import { BrowserRouter as Router } from "react-router-dom";
import EpisodeDetailPage from "./pages/EpisodeDetailsPage";

function App() {
  return (
    <div className="App">
      <nav>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/The_Powerpuff_Girls_%282016%29_reboot_logo.svg"
          width="125"
          height="50"
        />
      </nav>
      <Router>
        <Switch>
          <Route exact path="/" component={ShowPage} />
          <Route path="/episodes/:id" component={EpisodeDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
