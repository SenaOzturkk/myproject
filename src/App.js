import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { AddUserPage } from "./components/AddUserPage";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/add" component={AddUserPage} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
