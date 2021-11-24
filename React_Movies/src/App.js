import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route basename={process.env.PUBLIC_URL} path="/movie/:id" element={<Detail />}></Route>
        <Route basename={process.env.PUBLIC_URL} path="React_Movie/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;