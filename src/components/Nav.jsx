import { Image, Container } from "react-bootstrap";
import { icon } from "@/assets";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Container fluid="xl">
      <div className="all">
        <div className="nav">
          <Link to="/"><Image src={icon} alt="icon-img" /></Link>
          <span>JamalDev,</span>
        </div>

        <div className="contents">
          <Link to="/" className="nav_text">Home</Link>
          <Link to="/portfolio" className="nav_text">Portfolio</Link>
          <Link to="/aboutme" className="nav_text">About me</Link>
          <Link to="/testimonials" className="nav_text">Testimonials</Link>
        </div>

        <div>
            <Link to="contactme">
          <button>Contact Me</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
