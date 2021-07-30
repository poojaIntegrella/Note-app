import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
// import { create } from 'istanbul-reports';
import Create from "./Create";
import NoteDetail from "./NoteDetail";

function App() {
  const history = useHistory();
  const [textState, setTextState] = useState({
    heading: "",
    description: "",
  });
  const handleSubmit = (e) => {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(textState),
    }).then(() => {
      alert("added");
      console.log("New Blog added");
    });
    setTextState({
      heading: "",
      description: "",
    });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setTextState({ ...textState, [name]: value });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Create">
              <Create
                textState={textState}
                handleSubmit={handleSubmit}
                onChange={onChange}
              />
            </Route>
            <Route exact path="/notes/:id">
              <NoteDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
