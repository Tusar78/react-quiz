import React from "react";
import classes from "../../styles/Signup.module.css";
import Form from "../Form";
import Illustration from "./Illustration";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form>
          
        </Form>
      </div>
    </>
  );
};

export default Signup;
