import React from "react";
import "../css/Home.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home__heading">Mr Password</h1>
      <div className="img_div">
        <img
          className="Home__heading__logo"
          src="https://i.ibb.co/2d3VhZs/logo1.gif"
          alt="Logo Of Mr Password"
        />
      </div>
      {/* <img
        className="Home__heading__logo"
        src="https://i.ibb.co/5hL1dBz/logo2.gif"
        alt="logo2"
        border="0"
      /> */}
      <div className="Home__maininfo">
        <div className="p_div">
          <p className="Home__maininfo__paragraph">
            Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pharetra sit amet aliquam id diam maecenas ultricies.
          </p>
        </div>
        <div className="Home__maininfo__buttons">
          <Button variant="contained" color="primary" className="Home__signup">
            <Link to="/register" className="Home__maininfo__signup__button">
              Get Started
            </Link>
          </Button>
          <Button variant="contained" color="primary" className="Home__login">
            <Link to="/login" className="Home__maininfo__login__button">
              Log In
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
