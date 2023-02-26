import { Tab,Nav } from "react-bootstrap";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const frontend=[
    {
      technology: "HTML",
      experience : "Intermediate"
    },
    {
      technology: "CSS",
      experience : "Intermediate"
    },
    {
      technology: "Javascript",
      experience : "Intermediate"
    },
    {
      technology: "React.js",
      experience : "Intermediate"
    },
    {
      technology: "Bootstrap",
      experience : "Intermediate"
    },
    {
      technology: "Tailwindcss",
      experience : "Beginner"
    }
  ]
  const backend =[
    {
      technology: "Node.js",
      experience : "Intermediate"
    },
    {
      technology: "Express.js",
      experience : "Intermediate"
    },
    {
      technology: "MongoDB",
      experience : "Intermediate"
    },
    {
      technology: "NoSQL",
      experience : "Intermediate"
    },
    {
      technology: "MySQL",
      experience : "Beginner"
    },
    {
      technology: "PHP",
      experience : "Beginner"
    }
  ]
  const tools=[
    {
      technology: "VS code",
      experience : "Intermediate"
    },
    {
      technology: "Figma",
      experience : "Beginner"
    },
    {
      technology: "Studio 3T",
      experience : "Beginner"
    },
    {
      technology: "Git",
      experience : "Intermediate"
    }
  ]
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here you will find more information about me and my current programming skills and technologies I use.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                              <Nav.Item>
                                <Nav.Link eventKey="first">Front-End</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="second">Back-End</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="third">Tools</Nav.Link>
                              </Nav.Item>
                            </Nav>
                              <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                                <Tab.Pane eventKey="first">
                                <div className="skills-tab row">
                                    {
                                    frontend.map((items,index) =>{
                                      return(
                                        <div key={index} className='col-sm-12 col-md-4'>
                                          <h4>{items.technology}</h4>
                                          <p>{items.experience}</p>
                                        </div>
                                      )
                                    })}
                                </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                <div className="skills-tab row">
                                    {
                                    backend.map(items =>{
                                      return(
                                        <div key={items.index} className='col-sm-12 col-md-4'>
                                          <h4>{items.technology}</h4>
                                          <p>{items.experience}</p>
                                        </div>
                                      )
                                    })}
                                </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                <div className="skills-tab row">
                                    {
                                    tools.map(items =>{
                                      return(
                                        <div key={items.index} className='col-sm-12 col-md-4'>
                                          <h4>{items.technology}</h4>
                                          <p>{items.experience}</p>
                                        </div>
                                      )
                                    })}
                                </div>
                                </Tab.Pane>
                              </Tab.Content>
                          </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
