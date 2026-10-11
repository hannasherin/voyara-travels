
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Compass,
  Globe,
  Heart,
  ShieldCheck,
  CalendarCheck,
  Headset,
  MapPin,
  ArrowRight
} from "lucide-react";

import "./About.css";



const About = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Kerala",
      country: "India",
      image: "/images/Destination/Kerala.png"
    },
    {
      name: "Dubai",
      country: "UAE",
      image: "/images/Destination/Dubai.png"
    },
    {
      name: "Maldives",
      country: "Maldives",
      image: "/images/Destination/maldives.png"
    }
  ];
  const benefits = [
    {
      icon: <CalendarCheck />,
      title: "Easy Planning",
      description:
        "Discover destinations and explore travel packages with ease."
    },
    {
      icon: <ShieldCheck />,
      title: "Reliable Information",
      description:
        "Find useful package details to help plan your next journey."
    },
    {
      icon: <Compass />,
      title: "Amazing Destinations",
      description:
        "Explore beautiful places and discover new travel experiences."
    },
    {
      icon: <Headset />,
      title: "Travel Assistance",
      description:
        "Get help with your travel questions and booking enquiries."
    }
  ];

  return (
    <main className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <span>GET TO KNOW US</span>
          <h1>Discover the Story Behind Voyara</h1>
          <p>
            Every journey begins with a dream.
            Let us help you explore the world.
          </p>

          <button onClick={() => navigate("/package")}>
            Explore Packages <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-intro">
        <div className="about-intro-image">
          <img
            src="/images/Package/mnnar.png"
            alt="Beautiful Kerala travel destination"
          />
          <div className="about-image-label">
            <Globe size={24} />
            <span>Your Journey, Our Inspiration</span>
          </div>
        </div>

        <div className="about-intro-content">
          <span className="about-label">ABOUT VOYARA</span>
          <h2>Making Every Journey Meaningful</h2>

          <p>
            Voyara is a travel booking website designed
            to help travellers discover beautiful
            destinations and explore exciting travel
            packages in one place.
          </p>

          <p>
            From peaceful beaches to breathtaking
            mountains and vibrant cities, we make it
            easier to find inspiration for your next
            adventure.
          </p>

          <p>
            Whether you are planning a family holiday,
            a romantic getaway or an adventure trip,
            Voyara helps you take the first step.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose">
        <div className="purpose-card">
          <div className="purpose-icon">
            <Compass />
          </div>
          <h3>Our Mission</h3>
          <p>
            To make discovering destinations and
            planning memorable trips simpler and
            more convenient for every traveller.
          </p>
        </div>

        <div className="purpose-card">
          <div className="purpose-icon">
            <Heart />
          </div>
          <h3>Our Vision</h3>
          <p>
            To inspire people to explore new places,
            experience different cultures and create
            unforgettable travel memories.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-benefits">
        <div className="about-section-heading">
          <span className="about-label">THE VOYARA EXPERIENCE</span>
          <h2>Why Travel With Voyara?</h2>
          <p>
            Everything you need to start planning
            your next adventure.
          </p>
        </div>

        <div className="about-benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="about-benefit-card" key={index}>
              <div className="about-benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="about-destinations">
        <div className="about-section-heading">
          <span className="about-label">EXPLORE THE WORLD</span>
          <h2>Places That Inspire Us</h2>
          <p>
            Get inspired by some of our featured destinations.
          </p>
        </div>

        <div className="about-destination-grid">
          {destinations.map((destination) => (
            <div
              className="about-destination-card"
              key={destination.name}
            >
              <img
                src={destination.image}
                alt={destination.name}
              />

              <div className="about-destination-info">
                <span>
                  <MapPin size={15} />
                  {destination.country}
                </span>
                <h3>{destination.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          className="about-destinations-btn"
          onClick={() => navigate("/destination")}
        >
          Explore All Destinations <ArrowRight size={18} />
        </button>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Your Next Adventure Starts Here</h2>
        <p>
          Discover new places, find your perfect package
          and make your travel dreams happen.
        </p>

        <button onClick={() => navigate("/package")}>
          Find Your Trip <ArrowRight size={18} />
        </button>
      </section>

    </main>
  );
};

export default About;
