import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </AuthProvider>
  );
}

export default App;
