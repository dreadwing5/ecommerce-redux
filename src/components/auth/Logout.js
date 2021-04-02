import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout);
  }, [dispatch]);

  return <Redirect to="/login" />;
}

export default Logout;
