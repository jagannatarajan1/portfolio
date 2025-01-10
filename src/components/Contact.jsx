import React, { useEffect, useState } from "react";

const InputField = ({
  id,
  label,
  type,
  value,
  handleChange,
  placeholder,
  name,
}) => (
  <div className="form">
    <label htmlFor={id} className="form__label">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={id}
      className="form__input"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
      autoComplete="off"
    />
  </div>
);

const Contact = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const inputs = document.querySelectorAll("input, textarea");

    const handleFocus = (event) => {
      event.target.parentElement.classList.add("active");
    };

    const handleFocusOut = (event) => {
      if (event.target.value === "") {
        event.target.parentElement.classList.remove("active");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("focusout", handleFocusOut);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("focusout", handleFocusOut);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log the form element to check its structure
    console.log(event.target);

    // Create FormData from the form element
    const formData = new FormData(event.target);

    // Manually log all form data for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // Add the Web3Forms access key
    formData.append("access_key", "4b076560-25f9-4ce2-afea-e340e8eed5df");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully");
        setInputState({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Submission failed:", data.message);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="heading-container">
        <h2 className="section-heading-text coding-skill-text fade_up">
          Get In Touch.
        </h2>
        <div className="line"></div>
      </div>
      <p className="services-product-text fade_up">Hire Me</p>
      <div className="main-box-contact">{/* Email and Phone Details */}</div>
      <form className="form-container" onSubmit={handleSubmit}>
        <InputField
          id="name"
          label="NAME"
          name="name"
          type="text"
          value={inputState.name}
          handleChange={handleChange}
          placeholder="Your name"
        />
        <InputField
          id="email"
          name="email"
          label="EMAIL"
          type="email"
          value={inputState.email}
          handleChange={handleChange}
          placeholder="Your email"
        />
        <InputField
          id="subject"
          label="SUBJECT"
          name="subject"
          type="text"
          value={inputState.subject}
          handleChange={handleChange}
          placeholder="Your subject"
        />
        <div className="form">
          <label htmlFor="message" className="form__label">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            className="form__input"
            placeholder="Write your message..."
            value={inputState.message}
            onChange={handleChange}
            required
            rows="4"
          ></textarea>
        </div>
        <div className="wrapper blog-btn">
          <button type="submit" className="btn-hover">
            Submit Now
          </button>
        </div>
      </form>
      <footer className="footer">
        © 2025 | All rights reserved by Jagan Natarajan
      </footer>
    </section>
  );
};

export default Contact;
