import React, { useState } from "react";

import contact from "../assets/homepizza.jpeg";
import "../styles/contact.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleEventSubmit(event) {
    event.preventDefault();
    alert("Message Sent Successfully!");

    setName(" ");
    setEmail(" ");
    setMessage(" ");
  }

  return (
    <div className="contact">
      <div
        className="left-side"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="right-side">
        <h1>Contact us</h1>
        <form id="contact-form" onSubmit={handleEventSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
