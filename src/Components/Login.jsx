import React from "react";
import { Input } from "./Input";
import { useState } from "react";

export const Login = ({ registerHandle }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      username: username,
      password: password
    };
    console.log(data);
  };

  return (
    <>
      <h1 className="card-header"> Welcome to Plat </h1>
      <Input label="Username" setParentCallback={setUsername} />
      <Input label="Password" type="password" setParentCallback={setPassword} />
      <div className="btn-row">
        <button className="btn" onClick={handleSubmit}>
          LogIn
        </button>
        <button className="btn" onClick={registerHandle}>
          Register
        </button>
      </div>
      <div className="row" />
    </>
  );
};
