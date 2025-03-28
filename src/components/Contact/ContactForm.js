
/**
 * @file ContactForm.js
 * @description This file defines a React functional component for a contact form. 
 *              The form includes fields for the user's name, email, subject, and message, 
 *              and is styled with Bootstrap classes. It also includes visual feedback 
 *              elements for loading, error, and success states. The form is configured 
 *              to submit data via a POST request to a specified server endpoint.
 * @module ContactForm
 */
import React from 'react'

const ContactForm = () => {
  return (
    <form
      action="forms/contact.php"
      method="post"
      className="php-email-form"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="row gy-4">
        <div className="col-md-6">
          <label htmlFor="name-field" className="pb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name-field"
            className="form-control"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="email-field" className="pb-2">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email-field"
            required
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="subject-field" className="pb-2">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject-field"
            required
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="message-field" className="pb-2">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            rows="10"
            id="message-field"
            required
          ></textarea>
        </div>

        <div className="col-md-12 text-center">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>

          <button type="submit">Send Message</button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
