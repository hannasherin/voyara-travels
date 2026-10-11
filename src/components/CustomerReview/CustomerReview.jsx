import React from "react";
import { Star, Quote } from "lucide-react";
import "./CustomerReview.css";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    location: "Kerala, India",
    rating: 5,
    review:
      "Voyara made our Kerala trip so easy and memorable. The booking process was simple and the package was amazing."
  },
  {
    id: 2,
    name: "Mohammed Aslam",
    location: "Kozhikode, India",
    rating: 5,
    review:
      "We had a wonderful Dubai holiday. Everything was well planned, and finding the right travel package was easy."
  },
  {
    id: 3,
    name: "Fathima Niyas",
    location: "Malappuram, India",
    rating: 4,
    review:
      "The website is easy to use, and I loved exploring different destinations and comparing travel packages."
  }
];

const CustomerReview = () => {
  return (
    <section className="customer-reviews">
      <div className="reviews-header">
        <span className="reviews-label">VOYARA</span>
        <h2>What Our Travelers Say</h2>
        <p>
          Discover what makes every journey with Voyara special.
        </p>
      </div>

      <div className="reviews-grid">
        {reviews.map((item) => (
          <div className="review-card" key={item.id}>
            <div className="review-top">
              <div className="quote-icon">
                <Quote size={24} />
              </div>

              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill={star <= item.rating ? "#f5a623" : "none"}
                    color={star <= item.rating ? "#f5a623" : "#cbd5e1"}
                  />
                ))}
              </div>
            </div>

            <p className="review-text">
              "{item.review}"
            </p>

            <div className="review-divider"></div>

            <div className="review-customer">
              <div className="customer-avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h3>{item.name}</h3>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
