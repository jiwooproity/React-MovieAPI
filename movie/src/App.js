import {useState, useEffect} from "react";
import "./css/main.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route basename={process.env.PUBLIC_URL} path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
