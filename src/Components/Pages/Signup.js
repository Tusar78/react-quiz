import React from "react";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
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
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>Submit now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
