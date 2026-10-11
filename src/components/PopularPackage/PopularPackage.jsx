import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import "./PopularPackage.css";

const PopularPackage = () => {

  const navigate = useNavigate();

  const { packages, loading, error } = useSelector(
    (state) => state.packageInfo
  );

  

  if (loading) {
    return <p>Loading Package...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="popular-package">

      <div className="popular-package-header">

        <div>
          <h2>Popular Packages</h2>
          <p>Explore our most popular Packages</p>
        </div>

        <button
          className="see-more"
          onClick={() => navigate("/package")}
        >
          See More →
        </button>

      </div>


      <div className="package-grid">
      {packages.slice(0,2).map((packages) => (
    <div className="package-card-wrapper" key={packages.id}>

      <div className="package-card">

        <div className="package-image">
          <img
            src={`/images/Package/${packages.image}`}
            alt={packages.title}
          />
        </div>

        <div className="package-content">

          <h4>{packages.title}</h4>

          <p className="package-country">
            📍 {packages.destination}
          </p>

          <p className="package-description">
            {packages.description}
          </p>

          <button className="explore-btn">
            Explore Now →
          </button>

        </div>

      </div>

    </div>
  ))}
</div>

    </section>
  );
};

export default PopularPackage;