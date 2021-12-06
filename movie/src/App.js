import "./App.css";

import Home from "./routers/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route basename={process.env.PUBLIC_URL} path="React_Movie/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
