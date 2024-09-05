import { Nav } from "@/components";
import { Link, Outlet } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import { icon } from "@/assets";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function RootLayout() {
  return (
    <main>
      <Nav />
      <div style={{ minHeight: "150vh" }}>
        <Outlet></Outlet>
      </div>
      <Container fluid="xl">
        <div className="mt-4 mb-4 d-flex align-items-center justify-content-between">
          <div className="fw-bold">
          <Link to="/"><Image src={icon} alt="icon-img" /></Link>
            <span>JamalDev,</span>
          </div>

          <div className="discord">
            <Link to="/" className="nav_text">
              Home
            </Link>
            <Link to="/portfolio" className="nav_text">Portfolio</Link>
            <Link to="/aboutme" className="nav_text">About me</Link>
            <Link to="/testimonials" className="nav_text">Testimonials</Link>
          </div>

          <div className="footer_icon">
           <Link className="text-black" to="https://www.instagram.com/jamal_lawal?igsh=N2VqdDlodjg2NXA="> <IoLogoInstagram /></Link>
           <Link className="text-black" to="https://x.com/goodbadboyy?s=11"> <FaTwitter /></Link>
            <Link className="text-black" to="https://www.linkedin.com/in/jamal-lawal-9179b514b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin /></Link>
          </div>
        </div>
        <hr/>
        <div className="d-flex justify-content-between mt-4">
          <p>Made with <span className="text-danger">❤</span> by Jamal</p>
          <div className="d-flex gap-3">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies Settings</p>
            
          </div>
        </div>
      </Container>
    </main>
  );
}
