import React from "react";
import { Link } from "react-router-dom";
import signupImage from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration>
          <img src={signupImage} alt="Signup" />
        </Illustration>
        
      </div>
    </>
  );
};

export default Signup;
