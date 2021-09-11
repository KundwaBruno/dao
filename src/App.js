import React from "react";
import SideBar from "./componets/sideBar";
import NavBar from "./componets/nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dao from "./Pages/dao";
import EditAdd from "./Pages/editAdd";
import Learn from "./Pages/learn";
import Sponser from "./Pages/sponser";
import Widgets from "./Pages/widgets";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div style={{ display: "flex" }}>
          <SideBar />
          <Switch>
            <Route path="/" exact component={Dao} />
            <Route path="/dao/:daoid" component={Dao} />
            <Route path="/edit/:daoid" component={EditAdd} />
            <Route path="/add/:daoid" component={EditAdd} />
            <Route path="/learn" component={Learn} />
            <Route path="/sponser" component={Sponser} />
          </Switch>
          <Widgets />
        </div>
      </Router>
    </>
  );
}

export default App;
