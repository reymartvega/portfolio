import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      description: "Created using React and Bootstrap",
      imgUrl: projImg1,
      live:"https://adorable-crisp-56f774.netlify.app",
      source:'https://github.com/reymartvega/portfolio'
    },
    {
      title: "ShutInPh",
      description: "Simple MERN Application",
      imgUrl: projImg2,
      live:"https://shut-in-ph-8zdl-ee3r228vb-04rm7v.vercel.app",
      source:'https://gitlab.com/b24f-vega/capstone3-vega'
    },
    {
      title: "My First Portfolio",
      description: "Created using HTML,CSS and",
      imgUrl: projImg3,
      live:"https://reymartvega.github.io/webportfolio",
      source:'https://github.com/reymartvega/webportfolio'
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
