import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID,process.env.TEMPLATE_ID, form.current,process.env.PUBLIC_KEY)
      .then((result) => {
          e.target.reset();
          Swal.fire({
            title:'Email Sent',
            icon:'success'
          })
          
      }, (error) => {
          Swal.fire({
            title:'Action failed',
            icon:'error',
            text:error.text
          })
      });
  };
  return (
    
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center ">
        
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <Col className="col-8 mx-auto">
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <button type="submit"><span>Send</span></button>
                </form>
                </Col>
              </div>}
            </TrackVisibility>
        </Row>
      </Container>
    </section>
  )
}
