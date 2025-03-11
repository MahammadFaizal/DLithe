import React from 'react';
import './styles.css'; // Assuming styles are in a separate CSS file

const About = () => {
  return (
    <div className="container">
      <h1>Welcome to ByteStorm Bank</h1>
      <p>
        At ByteStorm Bank, we are committed to revolutionizing digital banking
        with security, speed, and simplicity. Our goal is to provide a seamless
        banking experience that meets the evolving financial needs of our
        customers.
      </p>

      <h2>Who We Are</h2>
      <p>
        ByteStorm Bank is a customer-centric financial institution that blends
        cutting-edge technology with trusted banking services. We offer secure
        transactions, instant transfers, bill payments, and personalized
        financial solutions to help you manage your money with ease.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>
          ✔ <strong>Secure & Reliable</strong> – Advanced encryption keeps your
          transactions safe.
        </li>
        <li>
          ✔ <strong>Fast & Easy Transfers</strong> – Send and receive money
          instantly.
        </li>
        <li>
          ✔ <strong>24/7 Access</strong> – Bank anytime, anywhere, with our
          user-friendly app.
        </li>
        <li>
          ✔ <strong>Customer Support</strong> – Our dedicated team is always
          ready to assist you.
        </li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        To empower individuals and businesses with innovative banking solutions
        that are fast, secure, and hassle-free.
      </p>

      <h2>Join Us Today</h2>
      <p>
        Experience banking made simple with ByteStorm Bank. Whether you're
        saving, investing, or making everyday transactions, we’ve got you
        covered.
      </p>

      <p className="contact">
        📩 Contact Us:
        <a href="mailto:support@bytestormbank.com">support@bytestormbank.com</a>
      </p>
      <p className="contact">📍 Headquarters: 123 Finance Street, New York, NY</p>
    </div>
  );
};

export default About;
