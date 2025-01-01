import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path="/registration" exact element={<Registration />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
  return <>{routes}</>;
}

export default App;
