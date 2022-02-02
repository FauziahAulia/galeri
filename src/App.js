import * as React from "react";
import Foto from "./component/Foto";
import Video from "./component/Video";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Foto} />
          <Route path="/video" component={Video} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
