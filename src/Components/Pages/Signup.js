import React from "react";
import classes from "../../styles/Signup.module.css";
import Form from "../Form";
import TextInput from "../TextInput";
import Illustration from "./Illustration";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.signup}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirmed password"
            icon="lock_lock"
          />
        </Form>
      </div>
    </>
  );
};

export default Signup;
