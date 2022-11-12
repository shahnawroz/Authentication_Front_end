import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isError, setIsError] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    if (password === cpassword) {
      const response = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.status === "ok") {
        navigate("/login");
      }
    } else {
      setIsError("Password not matched");
    }
  }

  return (
    <div className="main-form-container">
      <div>
        <h1>Register</h1>
        <div>{isError}</div>
        <form className="main-form" onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
          />
          <input
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default Register;
