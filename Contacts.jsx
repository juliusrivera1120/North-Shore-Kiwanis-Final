import React from "react";

function Contact() {
  return (
    <section className="page">
      <header className="page-header">
        <h2>Contact North Shore Kiwanis</h2>
      </header>

      <article className="page-content contact-layout">
        <div>
          <h3>Join a Meeting</h3>
          <address>
            North Shore Kiwanis
            <br />
            123 Harbor Avenue
            <br />
            North Shore, NY 11000
            <br />
            <a href="tel:+15555551234">(555) 555-1234</a>
            <br />
            <a href="mailto:info@northshorekiwanis.org">
              info@northshorekiwanis.org
            </a>
          </address>
          <p>
            Prospective members, sponsors, and community partners are always
            welcome. Reach out and we&apos;ll let you know when our next meeting
            or project is happening.
          </p>
        </div>

        <form className="contact-form" id="contact-form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required />

          <button type="submit">Send Message</button>
        </form>
      </article>
    </section>
  );
}

export default Contact;
