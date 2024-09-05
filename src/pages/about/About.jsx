import { newImg } from "@/assets";
import { Container, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid="xl">
         <div className="hero_content mt-5 d-flex  align-items-center py-4 px-3">
        <Image
          src={newImg}
          alt="my image"
          style={{ width: "450px", height: "429px" }}
          className="img-fluid img-adjust mt-5"
        />
        <div className="hero_text mt-5">
          <p className="fw-bold">About</p>
          <h3 className="mb-3">
            About Me
          </h3>
          <p className="omron">
          My name is Jamal. I’m a skilled web application developer with a passion for crafting innovative digital solutions. With a focus on user-centered design and cutting-edge technologies, I excel at transforming complex ideas into intuitive and visually appealing web applications. My expertise lies in [list of specific technologies or programming languages, e.g. JavaScript, React and Node].
          </p>
          </div>
          </div>
    </Container>
  )
}

export default About