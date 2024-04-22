import React from "react";
import "./Meanbody.css";
import img from "./image/fb.png";
import img1 from "./image/Linkedin.png";
import img3 from "./image/coffee2.jpg";

function Meanbody() {
  return (
    <div className="man">
      <div className="man1">
        <h1>coffee</h1>
        <ul className="man2">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>contactUs</li>
        </ul>
        <div>
          <button className="man3">SIGN IN</button>
        </div>
      </div>

      <div className="man6">
        <div className="man4">
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img} />
          </div>
        </div>
        <div>
          <div className="man5">
            <div className="man10">
              <h1>A HOT CUP </h1>
              <h1 className="man11">OF HAPPINESS</h1>
            </div>
            <h5 className="man12">
              Boost your productivity and build your mood with glasss of coffee
              in the morning coffee has a stimulating effect
            </h5>
            <div className="man13">
              <button className="man14">Order Here</button>
              <div className="man7">
                <h3>$15.00</h3>
                <div className="man9"></div>
                <h5 className="man8">regular price</h5>
                <div className="man15">
                  <img src={img3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Meanbody;
