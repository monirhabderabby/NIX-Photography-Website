import React from "react";
import "./Banner.css";
import gallary from "../Assets/gallary.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container">
      <div className="row banner">
        <div className="col-lg-6">
          <div className="content">
            <div>
              <h1>Every moment of your life beautiful</h1>
              <p>
                Your each movement, your each emotion is nothing but a beautiful
                picture and I just on to hold on those moments with our camera and
                make it a piece of art with my adroit editing
              </p>
              <Link to={'/gallary'} className="view-gallary-btn">View Gallary</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="gallary">
            <img className="img-fluid" src={gallary} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
