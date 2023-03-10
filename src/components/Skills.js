import { Tab,Nav } from "react-bootstrap";
export const Skills = () => {
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
      technology: "MaterialUI",
      experience : "Intermediate"
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
                                    backend.map((items,index) =>{
                                      return(
                                        <div key={index} className='col-sm-12 col-md-4'>
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
                                    tools.map((items,index) =>{
                                      return(
                                        <div key={index} className='col-sm-12 col-md-4'>
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
