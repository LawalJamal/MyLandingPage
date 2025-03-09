import { Texts } from "@/components";
import { Container, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { IoStar } from "react-icons/io5";
import { Taiwo } from "@/assets";
import { Dotun } from "@/assets";
import { Pelumi } from "@/assets";

const Testimonial = () => {
  return (
    <Container fluid="xl">
      <div className="mt-5">
        <p className="fw-bold">Clients Feedback</p>
        <h1>Customer testimonials</h1>
        <div className="d-flex justify-content-between mt-5">
          <div>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title className="text-success">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </Card.Title>

                <Card.Text>
                  Jamal's front-end development skills are top-notch. The
                  website he built for our company is not only visually stunning
                  but also incredibly user-friendly.
                </Card.Text>
                <div className="d-flex gap-3 align-items-center">
                  <Image
                    src={Taiwo}
                    roundedCircle
                    className="object-fit-cover"
                    alt="avatar"
                    style={{ width: "39px", height: "39px" }}
                  />
                  <div>
                    <Texts
                      text="Babatunde Taiwo"
                      size="0.9rem"
                      className="mb-0 fw-medium"
                    />
                    <span className="card_text">Auction Export</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title className="text-success">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </Card.Title>

                <Card.Text>
                  Working with Jamal on our front-end development project was a
                  fantastic experience. He exceeded our expectations with his
                  creative and innovative approach.
                </Card.Text>
                <div className="d-flex gap-3 align-items-center">
                  <Image
                    src={Dotun}
                    roundedCircle
                    className="object-fit-cover"
                    alt="avatar"
                    style={{ width: "39px", height: "39px" }}
                  />
                  <div>
                    <Texts
                      text="Atolagbe Adedotun"
                      size="0.9rem"
                      className="mb-0 fw-medium"
                    />
                    <span className="card_text">Auction Export</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "22rem" }}>
              <Card.Body>
                <Card.Title className="text-success">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </Card.Title>

                <Card.Text>
                  Jamal's front-end work is exceptional. He has a great eye for
                  design and a deep understanding of user experience. A pleasure
                  working with you.
                </Card.Text>
                <div className="d-flex gap-3 align-items-center">
                  <Image
                    src={Pelumi}
                    roundedCircle
                    className="object-fit-cover"
                    alt="avatar"
                    style={{ width: "39px", height: "39px" }}
                  />
                  <div>
                    <Texts
                      text="Odulaja Pelumi"
                      size="0.9rem"
                      className="mb-0 fw-medium"
                    />
                    <span className="card_text">Safenet Group</span>
                  </div>
                </div> 
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
