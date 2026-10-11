
import React from "react";
import "./WhyChoose.css";

const WhyChoose=()=> {
  return (
    <section className="why-choose">
      <div className="why-header">
        <h2>Why Choose Voyara?</h2>
        <p>
          We make your travel planning simple,
          comfortable and memorable.
        </p>
      </div>

      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon">💰</div>
          <h3>Best Prices</h3>
          <p>
            Enjoy amazing travel experiences
            at affordable prices.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">✈️</div>
          <h3>Easy Booking</h3>
          <p>
            Book your favourite travel package
            with just a few clicks.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">🛡️</div>
          <h3>Trusted Service</h3>
          <p>
            Travel with confidence and
            enjoy a smooth experience.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">🎧</div>
          <h3>24/7 Support</h3>
          <p>
            We're here to help you whenever
            you need travel assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
