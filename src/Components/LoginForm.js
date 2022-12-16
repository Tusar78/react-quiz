import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const {login} = useAuth();

  return (
    <Form style={{ height: "330px" }}>
      <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
      <TextInput type="password" placeholder="Enter password" icon="lock" />
      <Button>Submit Now</Button>
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
