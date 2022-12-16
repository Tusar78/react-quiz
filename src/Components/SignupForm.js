import React from "react";

const SignupForm = () => {
  return (
    <Form style={{ height: "500px" }}>
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
        icon="lock_clock"
      />
      <Checkbox text="I agree to the Terms &amp; Conditions" />
      <Button>Submit now</Button>
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
