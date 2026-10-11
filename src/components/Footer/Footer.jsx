import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#0b1d3a] px-5 pb-5 pt-12 font-sans text-white sm:px-8">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

        {/* Logo + Description */}
        <div>
          <Link
            to="/"
            className="mb-4 inline-block text-3xl font-bold text-[#1E9FFF] no-underline"
          >
            Voyara
          </Link>

          <p className="mb-4 text-sm leading-6 text-gray-300">
            Discover new places, create lasting memories.
          </p>


          {/* Social Icons */}
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://www.google.com"
              aria-label="Website"
              className="text-gray-300 transition duration-300 hover:text-[#1E9FFF]"
            >
              <FaGlobe size={20} />
            </a>

            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="text-gray-300 transition duration-300 hover:text-[#1E9FFF]"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="text-gray-300 transition duration-300 hover:text-[#1E9FFF]"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-300 transition duration-300 hover:text-[#1E9FFF]"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="https://x.com"
              aria-label="X"
              className="text-gray-300 transition duration-300 hover:text-[#1E9FFF]"
            >
              <FaXTwitter size={20} />
            </a>
          </div>


        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destination" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/package" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Support
          </h3>

          <ul className="space-y-3">
            <li>
              <Link to="/faq" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/help" className="text-sm text-gray-300 transition hover:text-[#1E9FFF]">
                Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="hidden sm:block">
          <h3 className="mb-4 text-lg font-semibold">
            Subscribe to our newsletter
          </h3>

          <p className="mb-4 text-sm leading-6 text-gray-300">
            Get travel deals and updates.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
              e.target.reset();
            }}
            className="flex w-full"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Your email address"
              className="min-w-0 flex-1 rounded-l-md border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800 outline-none focus:border-[#1E9FFF] focus:ring-1 focus:ring-[#1E9FFF]"
            />

            <button
              type="submit"
              className="shrink-0 rounded-r-md bg-[#1E9FFF] px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-[#1a2b4d] pt-5 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Voyara. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
