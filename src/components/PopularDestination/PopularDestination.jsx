import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import "./PopularDestination.css";

const PopularDestination = () => {

  const navigate = useNavigate();

  const { destinations, loading, error } = useSelector(
    (state) => state.destinationInfo
  );

  

  if (loading) {
    return <p>Loading destinations...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="popular-destination">

      <div className="popular-destination-header">

        <div>
          <h2>Popular Destinations</h2>
          <p>Explore our most beautiful destinations</p>
        </div>

        <button
          className="see-more"
          onClick={() => navigate("/destination")}
        >
          See More →
        </button>

      </div>


      <div className="popular-destination-grid">

        {destinations.slice(0, 4).map((destination) => (

          <div
            className="popular-destination-card"
            key={destination.id}
          >

            <img
            src={`/images/Destination/${destination.image}`}
            alt={destination.name}
          />

            <div className="popular-destination-info">

              <h3>{destination.name}</h3>

              <p>{destination.country}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default PopularDestination;