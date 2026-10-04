
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Description */}
        <div className="footer-section">
          <h2 className="footer-logo">Voyara</h2>
          <p>Discover new places, create lasting memories.</p>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
            <a href="#">💼</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Packages</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Subscribe to our newsletter</h3>
          <p>Get travel deals and updates.</p>
          <div className="newsletter ">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 TravelGo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
