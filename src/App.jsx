import Intro_page from "./pages/intro-page/intro-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import SignUp from "./pages/sign-up/signup";
import About from "./pages/intro-page/info/about";
import Getinfo from "./pages/intro-page/info/get-info";
import User_page from "./pages/user_page/user_page";
import Admin_usr_page from "./pages/admin_page/admin_page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<Intro_page />} />
        <Route path="/get-info" element={<Getinfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<User_page />} />
        <Route path="/admin" element={<Admin_usr_page />} />
      </Routes>
    </Router>
  );
}

export default App;
