// =====================================
// DEVNIRALA PORTFOLIO
// CONTACT SECTION
// WHATSAPP INTEGRATION
// =====================================

import { useState } from "react";
import "./Contact.css";

function Contact() {

  // =====================================
  // WHATSAPP NUMBER
  // =====================================

  // Replace with your real WhatsApp number.
  // Country code included, + sign excluded.
  // Example: 919876543210

  const whatsappNumber = "919630949975";


  // =====================================
  // FORM STATE
  // =====================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  // =====================================
  // UI STATE
  // =====================================

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSending, setIsSending] = useState(false);


  // =====================================
  // HANDLE INPUT CHANGE
  // =====================================

  const handleChange = (event) => {

    const { id, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [id]: value,
    }));

    // Clear previous messages
    if (error) {
      setError("");
    }

    if (success) {
      setSuccess("");
    }
  };


  // =====================================
  // HANDLE FORM SUBMIT
  // =====================================

  const handleSubmit = (event) => {

    event.preventDefault();

    // Clear previous messages
    setError("");
    setSuccess("");


    // =====================================
    // GET FORM VALUES
    // =====================================

    const {
      name,
      email,
      subject,
      message,
    } = formData;


    // =====================================
    // EMPTY FIELD VALIDATION
    // =====================================

    if (
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {

      setError(
        "Please fill in all fields before sending."
      );

      return;
    }


    // =====================================
    // EMAIL VALIDATION
    // =====================================

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.trim())) {

      setError(
        "Please enter a valid email address."
      );

      return;
    }


    // =====================================
    // WHATSAPP NUMBER VALIDATION
    // =====================================

    if (
      !whatsappNumber ||
      whatsappNumber === "9630949975"
    ) {

      setError(
        "WhatsApp number is not configured yet."
      );

      return;
    }


    // =====================================
    // START SENDING
    // =====================================

    setIsSending(true);


    // =====================================
    // CREATE WHATSAPP MESSAGE
    // =====================================

    const whatsappMessage = `
Hello DevNirala,

I would like to connect with you.

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}
    `.trim();


    // =====================================
    // CREATE WHATSAPP URL
    // =====================================

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;


    // =====================================
    // OPEN WHATSAPP
    // =====================================

    try {

      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );


      // =====================================
      // SUCCESS
      // =====================================

      setSuccess(
        "Your message is ready on WhatsApp."
      );


      // =====================================
      // RESET FORM
      // =====================================

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (submitError) {

      console.error(
        "WhatsApp Error:",
        submitError
      );

      setError(
        "Something went wrong. Please try again."
      );

    } finally {

      setIsSending(false);

    }
  };


  // =====================================
  // JSX
  // =====================================

  return (

    <section
      className="contact-section"
      id="contact"
    >

      <div className="contact-container">


        {/* =====================================
            CONTACT HEADER
        ===================================== */}

        <div className="contact-header">

          <span className="section-label">
            06 — CONTACT
          </span>


          <h2>
            Let's build something{" "}
            <span>great.</span>
          </h2>


          <p>
            Have an idea, project or opportunity?
            Let's connect and turn it into something
            meaningful.
          </p>

        </div>



        {/* =====================================
            CONTACT CONTENT
        ===================================== */}

        <div className="contact-content">


          {/* =====================================
              CONTACT INFORMATION
          ===================================== */}

          <div className="contact-info">


            {/* EMAIL */}

            <div className="contact-item">

              <span className="contact-number">
                01
              </span>

              <div>

                <small>
                  Email
                </small>

                <p>

                  <a
                    href="mailto:devnirala2074@gmail.com"
                  >
                    devnirala2074@gmail.com
                  </a>

                </p>

              </div>

            </div>


            {/* LOCATION */}

            <div className="contact-item">

              <span className="contact-number">
                02
              </span>

              <div>

                <small>
                  Location
                </small>

                <p>
                  India
                </p>

              </div>

            </div>


            {/* AVAILABILITY */}

            <div className="contact-item">

              <span className="contact-number">
                03
              </span>

              <div>

                <small>
                  Availability
                </small>

                <p>
                  Open to opportunities
                </p>

              </div>

            </div>

          </div>



          {/* =====================================
              CONTACT FORM
          ===================================== */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >


            {/* NAME + EMAIL */}

            <div className="form-row">


              {/* NAME */}

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                />

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                />

              </div>

            </div>



            {/* SUBJECT */}

            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSending}
              />

            </div>



            {/* MESSAGE */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="7"
                placeholder="Tell me about your idea..."
                value={formData.message}
                onChange={handleChange}
                disabled={isSending}
              />

            </div>



            {/* =====================================
                ERROR MESSAGE
            ===================================== */}

            {error && (
              <p
                className="contact-error"
                role="alert"
              >
                {error}
              </p>
            )}



            {/* =====================================
                SUCCESS MESSAGE
            ===================================== */}

            {success && (
              <p
                className="contact-success"
                role="status"
              >
                {success}
              </p>
            )}



            {/* =====================================
                SUBMIT BUTTON
            ===================================== */}

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >

              {isSending
                ? "Opening WhatsApp..."
                : "Send Message ↗"
              }

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}


// =====================================
// EXPORT
// =====================================

export default Contact;