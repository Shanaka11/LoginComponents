import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export const Welcome = () => {
  const [register, setRegister] = useState(false);
  const [logged, setLogged] = useState(false);

  const registerHandle = () => {
    setRegister(!register);
  };

  const loginHandle = () => {
    setLogged(true);
  };

  return (
    <div className="container">
      <div className="card">
        {!register && (
          <Login registerHandle={registerHandle} loginHandle={loginHandle} />
        )}
        {register && <Register registerHandle={registerHandle} />}
      </div>
    </div>
  );
};
