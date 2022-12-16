import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleForm = async (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      return setError("Password doesn't mass");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
    } catch (error) {}
  };

  return (
    <Form style={{ height: "500px" }}>
      <TextInput
        type="text"
        placeholder="Enter name"
        icon="person"
        value={username}
        onchange={(e) => setUsername(e.target.value)}
      />
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onchange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onchange={(e) => setPassword(e.target.value)}
      />
      <TextInput
        type="password"
        placeholder="Confirmed password"
        icon="lock_clock"
        value={confirmedPassword}
        onchange={(e) => setConfirmedPassword(e.target.value)}
      />
      <Checkbox
        text="I agree to the Terms &amp; Conditions"
        value={agree}
        onchange={(e) => setAgree(e.target.value)}
      />
      <Button>Submit now</Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
