import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { SignIn } from "./components/SignIn/signIn";
import { SignUp } from "./components/SignUp/Signup";
import { Dashboard } from "./components/CreateBookForm/CreateBookForm";
import { ProtectedRoute } from "./components/ProtectRoute";
import { store } from "./store";
import { Aside } from "./components/DashBoard/Dashboard";

function App() {
  const { token } = store.getState().auth;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            token ? <Navigate to="/aside" /> : <Navigate to="/SignUp" />
          }
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="aside" element={<Aside />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
