import { redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivetRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    redirect("/")
  );
};

export default PrivetRoute;
