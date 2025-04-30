import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { SignIn } from "./components/Form/Input";
import { SignUp } from "./components/SignUp/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
