import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="card bga home-container">
        <div className="home-card">
          <div className="text-center mt-5">
            <h1>Home</h1>
          </div>
          <div className="home-content">
            <h6>
             Halo, Selamat Datang di ChatBot terkeren
             se jagat raya
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
