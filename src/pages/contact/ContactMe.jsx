import { ActionButton } from "@/components";
import { Container } from "react-bootstrap";

const ContactMe = () => {
  return (
    <Container fluid="xl">
      <div>
        <div className="mt-5 text-center">
          <p className="fw-bold">Get in Touch</p>
          <h3 className="fw-bold">Contact Me</h3>
          <p className="omron mt-3">Fill in required fields</p>
        </div>
        <div className="mt-4">
          <form>
            <label for="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              className="mb-3"
            />

            <label for="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              required
              className="mb-3"
            />

            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mb-3"
            />

            <label for="phone-number">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              name="phone-number"
              required
              className="mb-3"
            />

            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              className="mb-3"
            ></textarea>

            <label for="terms">
              <input type="checkbox" id="terms" name="terms" required />I accept
              the terms
            </label>

            <div className="text-center mt-3">
              <ActionButton
                text="Submit"
                size="sm w-100"
                style={{ backgroundColor: "var(--MediumSlateBlue" }}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
