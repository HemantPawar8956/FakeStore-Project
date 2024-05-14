import React, { Component } from "react";
import Logoi from "./urbancompanylogo.png";
import App from "./../App";
class Logo extends Component {
  render() {
    return (
      <div className="logoBlock ">
        <a href="#">
          <span>
            <picture>
              <img src={Logoi} alt="logo" />
            </picture>
          </span>
        </a>
      </div>
    );
  }
}
export default Logo;
