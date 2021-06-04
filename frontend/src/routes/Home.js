import React from "react";
import "../css/Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home__heading">Mr Password</h1>
      <img
        className="Home__logo"
        src="https://i.ibb.co/wNKjHb4/logo1.gif"
        alt="Logo Of Mr. Password"
      />
      <p className="Home__paragraph">
        Generated Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Pharetra sit amet aliquam id diam maecenas ultricies.
      </p>
      <Button variant="contained" color="primary" className="Home__signup">
        <Link to="/register" className="Home__signup__button">
          Get Started
        </Link>
      </Button>
      <Button variant="contained" color="primary" className="Home__login">
        <Link to="/login" className="Home__login__button">
          Log In
        </Link>
      </Button>
    </div>
  );
};

export default Home;
