import { Col,Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,live, source }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="d-flex justify-content-evenly mt-2">
            <Button href={live} className="card-btn btn btn-outline-light px-3 ">Live</Button>
            <Button href={source} className="card-btn btn btn-outline-light px-3">Source</Button>
          </div>
        </div>
      </div>
    </Col>
  )
}
