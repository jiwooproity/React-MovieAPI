import "./App.css";

import Home from "./routers/Home";
import Detail from "./routers/Detail";

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
          <Route basename={process.env.PUBLIC_URL} path="React_Movie/detail/:id" element={<Detail/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
