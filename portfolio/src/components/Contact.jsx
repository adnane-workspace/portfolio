import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Interested in working together? Email me at{' '}
          <a href="mailto:you@example.com">you@example.com</a>
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
