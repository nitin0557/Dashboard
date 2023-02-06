import React, { useState } from "react";
import { login } from "../state/action-creators";
import { TEST_USER_EMAIL } from "../state/Constants";
import { TEST_USER_PWD } from "../state/Constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import img from "../components/Images/login.png";

const Login = () => {
  const [formValue, setformValues] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(formValue);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformValues({ ...formValue, [name]: value });
  };
  const submitHandler = (e) => {
    if (
      formValue.email === TEST_USER_EMAIL &&
      Number(formValue.password) === Number(TEST_USER_PWD)
    ) {
      localStorage.setItem("login", "1");
      console.log("sdasdasdasd");
      e.preventDefault();
      dispatch(login());
      navigate("/maincontainer");
    } else {
      alert("Incorrect Email & Password");
    }
  };
  return (
    <div
      style={{
        hwight: "100%",
        background: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1040px",
          height: "449px",
          background: "#dee2e6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <img
              style={{
                width: "660px",
              }}
              src={img}
              alt="login.png"
            />
          </div>
          <div
            className="inputforlogin"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "inherit",
            }}
          >
            <form onSubmit={submitHandler}>
              <label
                for="email"
                style={{ position: "relative", right: "17px" }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formValue.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />
              <br />
              <label for="pwd" style={{ position: "relative", right: "17px" }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="pwd"
                value={formValue.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
              <br />
              <div style={{ position: "relative", left: "75px", top: "11px" }}>
                {" "}
                <button className="loginbtn">LOGIN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
