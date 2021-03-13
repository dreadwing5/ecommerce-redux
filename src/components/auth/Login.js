import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Login</h5>
                <form className="form-signin" onSubmit={(e) => onSubmit(e)}>
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUsername"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                      required
                      autoFocus
                    />
                    <label htmlFor="inputUsername">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => onChange(e)}
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </button>
                  <p className="bottom-text">
                    Don't have an account? <Link to="/register"> Register</Link>
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

export default Login;
