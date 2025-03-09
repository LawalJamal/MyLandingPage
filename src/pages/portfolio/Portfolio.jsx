import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { advImg } from "@/assets";
import { teemImg } from "@/assets";
import { cardImg } from "@/assets";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  return (
    <Container fluid="xl" className="mt-5">
      <div>
        <p className="fw-bold">Recent Projects</p>
        <div className="d-flex justify-content-between">
          <h1>My Portfolio</h1>
          <Link to="https://github.com/LawalJamal">
          <button className="git_button text-white">
            <FaGithub />
            <span> Visit my GitHub</span>
          </button>
          </Link>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <div>
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                src={teemImg}
                style={{ height: "22rem" }}
                className="card_img"
              />
              <Card.Body>
                <Card.Title>Teem Platform</Card.Title>
                <Card.Text className="omron">
                  A user-friendly platform that empowers individuals and
                  businesses to sell their products and services online.
                </Card.Text>
                <div className="central">
                <Link to="https://team-seller-omega.vercel.app/authorize/login">
                  <p className="text-black">Visit Website <span>
                    <GoArrowUpRight className="text-success"/>
                  </span></p>
                  
                </Link>
                </div>
                
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                src={advImg}
                style={{ height: "22rem" }}
                className="card_img"
              />
              <Card.Body>
                <Card.Title>Advice Generator App</Card.Title>
                <Card.Text className="omron">
                  With just a click or refresh, receive a random piece of advice
                  tailored to inspire, motivate, or simply provide a different
                  perspective.
                </Card.Text>
                <div className="central">
                <Link to="https://internship-advice-generator.vercel.app/">
                  <p className="text-black">Visit Website <span>
                    <GoArrowUpRight className="text-success"/>
                  </span></p>
                  
                </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                src={cardImg}
                style={{ height: "22rem" }}
                className="card_img"
              />
              <Card.Body>
                <Card.Title>LadyLine Fashion</Card.Title>
                <Card.Text className="omron">
                  A curated online marketplace designed exclusively for women,
                  offering a wide range of products to suit every taste and
                  lifestyle.
                </Card.Text>
                <div className="central">
                <Link to="https://ladyline-client.vercel.app/">
                  <p className="text-black">Visit Website <span>
                    <GoArrowUpRight className="text-success"/>
                  </span></p>
                  
                </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
