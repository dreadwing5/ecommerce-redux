import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Home() {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  //   if (!isAuthenticated) {
  //     return <Redirect to="/login" />;
  //   }

  return (
    <div>
      <Header />
      <Navigation />
      HomePage
    </div>
  );
}

export default Home;
