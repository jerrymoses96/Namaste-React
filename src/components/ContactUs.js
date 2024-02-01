

function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h1>Contact Us</h1>
        <p className="contact-us-description">Have a question or feedback? Reach out to us!</p>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: info@fooddelivery.com</p>
          <p>Phone: 123-456-7890</p>
        </div>

        <div className="visit-us">
          <h2>Visit Us</h2>
          <p>123 Main Street</p>
          <p>City, State, Zip Code</p>
        </div>

        <div className="send-message">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
