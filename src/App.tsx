import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from "./components/Form/Input";
import { SignUp } from "./components/SignUp/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
