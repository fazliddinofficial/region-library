// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { store } from "../../store";

export function ProtectedRoute({ children }: any) {
  const {token} = store.getState().auth;

  return token ? children : <Navigate to="/SignIn" replace/>;
}
