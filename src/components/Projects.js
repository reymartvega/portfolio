import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Admin Dashboard Client",
      description: "React.js, MaterialUI,Redux and Nivo",
      imgUrl: projImg4,
      live:"https://admin-dashboard-client-8q9l.onrender.com",
      source:'https://github.com/reymartvega/Admin_Dashboard_Client'
    },
    {
      title: "Admin Dashboard API",
      description: "Express.js,MongoDB,Node.js and RTK Query",
      imgUrl: projImg4,
      live:"https://admin-dashboard-client-8q9l.onrender.com",
      source:'https://github.com/reymartvega/Admin_Dashboard_API'
    },
    {
      title: "Personal Portfolio",
      description: "React.js and Bootstrap",
      imgUrl: projImg1,
      live:"https://adorable-crisp-56f774.netlify.app",
      source:'https://github.com/reymartvega/portfolio'
    },
    {
      title: "ShutInPh Client",
      description: "React and Bootstrap",
      imgUrl: projImg2,
      live:"https://shut-in-ph-8zdl-ee3r228vb-04rm7v.vercel.app",
      source:'https://gitlab.com/b24f-vega/capstone3-vega'
    },
    {
      title: "ShutInPh API",
      description: "Express.js,Node.js and MongoDB",
      imgUrl: projImg2,
      live:"https://shut-in-ph-8zdl-ee3r228vb-04rm7v.vercel.app",
      source:'https://gitlab.com/b24f-vega/capstone2-vega/shut_in_ph'
    },
    {
      title: "My First Portfolio",
      description: "HTML,CSS and Bootstrap",
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
