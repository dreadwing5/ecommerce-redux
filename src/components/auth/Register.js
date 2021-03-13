import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import { useDispatch } from "react-redux";
import Alert from "../Layout/Alert";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const dispatch = useDispatch();
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert("Password do not match", "danger"));
    } else {
      dispatch(register(formData));
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <Alert />
                <h5 className="card-title text-center">Register</h5>

                <form className="form-signin" onSubmit={(e) => onSubmit(e)}>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUserame"
                      className="form-control"
                      placeholder="Username"
                      name="name"
                      required
                      autoFocus
                      value={name}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor="inputUsername">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      name="email"
                      placeholder="Email address"
                      required
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <hr />
                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required
                      minLength="6"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputConfirmPassword"
                      className="form-control"
                      name="password2"
                      placeholder="Confirm Password"
                      required
                      minLength="6"
                      value={password2}
                      onChange={(e) => onChange(e)}
                    />
                    <label htmlFor="inputConfirmPassword">
                      Confirm password
                    </label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                  <p className="bottom-text">
                    Already have an account?
                    <Link to="/login">Log In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
