import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivetRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivetRoute;
