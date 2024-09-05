import { ActionButton } from "@/components";
import { myImg } from "@/assets";
import { Container, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CiMobile3 } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import { VscDebugStepBack } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <Container fluid="xl">
      {/* <div className="hero"> */}
      <div className="hero_content d-flex flex-row-reverse align-items-center py-4 px-3">
        <Image
          src={myImg}
          alt="my image"
          style={{ width: "417px", height: "279px" }}
          className="img-fluid img-adjust mt-5 border"
        />
        <div className="hero_text mt-5">
          <p className="fw-bold">Hey, I am Jamal</p>
          <h3>
            A skilled web-app developer whose interest lies in building scalable
            web applications using modern frameworks like React and Node.js
          </h3>
          <p className="omron">
            I specialize in creating high-performance, user-friendly web
            applications using the latest technologies.
          </p>
          <Link to="/contactme">
          <ActionButton
            text="Get In Touch"
            size="sm"
            className="w-10 mb-5 mt-3"
            style={{ backgroundColor: "var(--MediumSlateBlue" }}
          />
          </Link>
        </div>
      </div>

      {/* </div> */}
      <div className="mt-5 fw-bold mb-5">
        
        <p>My Skills</p>
        <h3>My Expertise</h3>
        </div>
        <div className="d-flex gap-2 align-items-center justify-content-between mt-5">
          <div>
            <Card style={{ width: "16rem"}}>
              <CiMobile3  size="50px" className="p-2 mt-2"/>
              <Card.Body style={{ height: "180px"}} className="aqua">
                <Card.Title>Responsive Design</Card.Title>
                <Card.Text className="omron">
                 I specialize in crafting responsive designs that seamlessly adapt to various screen sizes and devices.


                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "16rem"}}>
              <IoPricetagsOutline size="50px" className="p-2 mt-2"/>
              <Card.Body style={{ height: "180px"}} className="aqua">
                <Card.Title>Front-End Frameworks</Card.Title>
                <Card.Text className="omron">
                As a skilled front-end developer, I have a strong foundation in popular frameworks like React and Angular. 
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "16rem"}}>
              <VscDebugStepBack  size="50px" className="p-2 mt-2"/>
              <Card.Body style={{ height: "180px"}} className="aqua">
                <Card.Title>Testing and Debugging</Card.Title>
                <Card.Text>
                I carefully review each line of code, running comprehensive tests, and addressing any issues that arise.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "16rem"}}>
              <FaCode size="50px" className="p-2 mt-2"/>
              <Card.Body style={{ height: "180px"}} className="aqua">
                <Card.Title>Cloud Services</Card.Title>
                <Card.Text>
                I am passionate about leveraging the scalability & cost-effectiveness that cloud services offer to build robust & efficient applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      
    </Container>
  );
};

export default Home;
