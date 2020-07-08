import React from "react";
import { Input } from "./Input";
import { Error } from "./Error";
import { useState } from "react";

export const Register = ({ registerHandle }) => {
  // 1
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  // 2
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  // 3
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [page, setPage] = useState(1);
  const steps = 3;

  const [error, setError] = useState(false);

  const handleNext = () => {
    // Add validation here
    // if page 1
    let validated = true;

    if (page === 1) {
      if (name === "") {
        console.log("Name is required");
        validated = false;
        setError(true);
      }
    }
    // if page 2
    // if page 3
    if (validated) {
      setPage(page + 1);
      setError(false);
    }
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <>
      {page === 1 && (
        <>
          <h1 className="card-header"> Organization Details </h1>
          <Input label="Name" initialValue={name} setParentCallback={setName} />
          <Input
            label="Email"
            initialValue={email}
            type="email"
            setParentCallback={setEmail}
          />
          <Input
            label="Type"
            initialValue={type}
            type="select"
            setParentCallback={setType}
          />
        </>
      )}
      {page === 2 && (
        <>
          <h1 className="card-header"> Personal Details </h1>
          <Input label="First Name" setParentCallback={setFname} />
          <Input label="Last Name" setParentCallback={setLname} />
        </>
      )}
      {page === 3 && (
        <>
          <h1 className="card-header"> Login Details </h1>
          <Input label="Username" setParentCallback={setUsername} />
          <Input label="Password" setParentCallback={setPassword1} />
          <Input label="Confirm Password" setParentCallback={setPassword2} />
        </>
      )}
      {error && <Error error="Error" />}
      <div className="btn-row">
        {(page === 1 || page > steps) && (
          <button className="btn" onClick={registerHandle}>
            Cancel
          </button>
        )}
        {page > 1 && page <= steps && (
          <button className="btn" onClick={handlePrev}>
            Back
          </button>
        )}
        {page < steps && (
          <button className="btn" onClick={handleNext}>
            Next
          </button>
        )}
        {page === steps && (
          <button className="btn" onClick={registerHandle}>
            Finish
          </button>
        )}
      </div>
      <div className="row-footer">
        {page === 1 && (
          <>
            <div className="row-3-dark" />
            <div className="row-3-light" />
            <div className="row-3-light" />
          </>
        )}
        {page === 2 && (
          <>
            <div className="row-3-light" />
            <div className="row-3-dark" />
            <div className="row-3-light" />
          </>
        )}
        {page === 3 && (
          <>
            <div className="row-3-light" />
            <div className="row-3-light" />
            <div className="row-3-dark" />
          </>
        )}
      </div>
    </>
  );
};
