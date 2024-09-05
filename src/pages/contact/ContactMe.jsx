import { ActionButton } from "@/components";
import { Container, Form } from "react-bootstrap";

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
          <div className="mb-3">
            {" "}
            <p>First name</p>
            <Form>
              <Form.Control/>
            </Form>
          </div>
          <div className="mb-3">
            {" "}
            <p>Last name</p>
            <Form>
              <Form.Control/>
            </Form>
          </div>
          <div className="mb-3">
            {" "}
            <p>Email</p>
            <Form>
              <Form.Control/>
            </Form>
          </div>
          <div className="mb-3">
            {" "}
            <p>Phone number</p>
            <Form>
              <Form.Control/>
            </Form>
          </div>
          <div className="mb-3">
            {" "}
            <p>Message</p>
            <Form>
              <Form.Control/>
            </Form>
          </div>
        </div>
        <div>
        <ActionButton
            text="Submit"
            size="sm"
            className="w-100 mb-5 mt-3"
            style={{ backgroundColor: "var(--MediumSlateBlue" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactMe;
