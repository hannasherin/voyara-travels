
import React from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    e.target.reset();
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span>GET IN TOUCH</span>
        <h1>Contact Voyara</h1>
        <p>Have a question about your next trip? We’re here to help!</p>
      </section>

      <section className="contact-container">
        <div className="contact-details">
          <span className="contact-label">CONTACT US</span>
          <h2>Let's Plan Your Next Adventure</h2>
          <p>
            Contact us for travel information, package enquiries,
            or help planning your next journey.
          </p>

          <div className="contact-item">
            <div className="contact-icon"><Mail /></div>
            <div>
              <h3>Email Us</h3>
              <p>support@voyara.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><Phone /></div>
            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><MapPin /></div>
            <div>
              <h3>Our Location</h3>
              <p>Calicut, Kerala, India</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><Clock /></div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday – Saturday, 9 AM – 6 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>Fill in the form and let us know how we can help.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="What is your enquiry about?"
              required
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
            />

            <button type="submit">
              Send Message <Send size={17} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;