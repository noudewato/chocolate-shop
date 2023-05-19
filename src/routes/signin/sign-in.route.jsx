import React, { useState } from "react";
import SignInForm from "../../components/signin-form/signin.component";

const SignIn = () => {
  const formField = { email: '', password: '' };
  const [ field, setField ] = useState(formField)
  const {email, password} = field
  
  const onChangeHandler = (e) => {
    const {name, value} = e.target
    setField({...field, [name]:value})
  }
  return (
    <div>
      <h4>sign in with your email and password</h4>
      <form>
        <SignInForm
          label="email"
          value={email}
          name="email"
          type="email"
          onChange={onChangeHandler}
          required
          placeholder="enter your email"
        />
        <SignInForm
          label="password"
          type="text"
          name="password"
          value={password}
          onChange={onChangeHandler}
          required
          placeholder="enter password"
        />
        <button type="submit">submit</button>
        <button type="button">sign in with google</button>
      </form>
    </div>
  );
};

export default SignIn;
