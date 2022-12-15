import "../styles/App.css";
import Layout from "./Layout";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Home />
        <Signup />
        <Login />
        <Quiz />
        <Result />
      </Layout>
    </>
  );
}

export default App;
