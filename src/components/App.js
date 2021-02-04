import { useState, useEffect } from "react";
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
import ReactCardFlip from 'react-card-flip';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import ProfileImage from "../assets/images/avatar.jpg";
import { Envelope, Telephone, Linkedin, Github, Camera } from 'react-bootstrap-icons';


function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)

//Set Timing for Progress Spinner
  setTimeout(() => {
    setIsLoading(false)
  }, 1000);

//Initial flip effect
useEffect(()=>{
  setTimeout(() => {
    setIsFlipped(true)
  }, 2000);

  setTimeout(() => {
    setIsFlipped(false)
  }, 4000);
}, []);  /* "[]" trigger useEffect only during initial render */

  const handleEvent = (event) => {
    switch (event.type) {
      case "mouseenter":
        setIsFlipped(true)
        break;

      case "mouseleave":
        setIsFlipped(false)
        break;

      case "click":
        // setIsFlipped(true)
        isFlipped ? setIsFlipped(false) : setIsFlipped(true)
        // console.log("clicked");
        break;

      default:
        // setIsFlipped(false)
        break;
    }

  }

  return (
    <Spring
      // fade in effect
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}>

      {props => (
        <div style={props}>
          <div className="App">
            <Container> 
                {/* Show Progress Spinner */}
                {isLoading && (
                  <div className="mycentered">
                    <Spinner animation="border" variant="info" />
                  </div>
                )}
                {/* Profile Card */}
                <Row>
                  <Col md={{ span: 8, offset: 2 }} style={{ marginTop: "15%" }} >

                    {/* Card Flip  */}
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront="1.8" flipSpeedFrontToBack="1.8">
                      {/*                      
                        <FrontCard
                          handleEvent={handleEvent} />
                        <BackCard
                          handleEvent={handleEvent} /> */}
                      <div className="front-card" onClick={handleEvent} onMouseEnter={handleEvent} onMouseLeave={handleEvent}>
                        <img src={ProfileImage} alt="Avatar"
                          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(70%)" }} />

                        <div className="front-content">
                          <h2>Isaac Afrifa </h2>
                          <h4>Software Engineer</h4>
                          <p className="font-italic">
                            "A true master is an eternal student"<br />
                            - Master Yi
                          </p>
                        </div>
                      </div>

                      <div className="back-card" onClick={handleEvent} onMouseEnter={handleEvent} onMouseLeave={handleEvent}>
                       
                        <div className="back-content">
                          <h4>Web & Mobile App Development</h4>
                          <div className="comp1">
                            <ul>
                              <li><b>Languages: </b> <span className="font-italic">Java, Javascipt, SQL & Kotlin</span></li>
                              <li><b>Technologies: </b> <span className="font-italic">Spring Boot, Android, React, CI/CD & Docker</span></li>
                              <li><b>Architectures: </b> <span className="font-italic">REST, Microservices & Monoliths</span></li>
                              <li><b>Other Skills: </b> <span className="font-italic">Digital Forensics, Photography & Team Player</span></li>
                            </ul>

                            <div className="comp2">
                             
                            </div>
                          </div>
                        </div>
                      </div>

                    </ReactCardFlip>
                   
                  </Col>
                </Row>

              
                       <Row>
                        <Col md={{ span: 6 ,offset: 3}}>
                          <div className="comp3">
                            <a className="icon-box" href="tel:+233277599576"><Telephone size={24} /></a>
                            <a className="icon-box" href="mailto:isaac.afrifa3@yahoo.com"><Envelope size={24} /></a>
                            <a className="icon-box" href="https://www.linkedin.com/in/isaac-afrifa-9aa543106"><Linkedin size={24} /></a>
                            <a className="icon-box" href="https://bitbucket.org/mrblo"><Github size={24} /></a>
                            <a className="icon-box" href="https://www.flickr.com/photos/afrifa/"><Camera size={24} /></a>
                           </div>
                        </Col>
                       </Row>
                  
                
             
            </Container>

          </div>
        </div>
      )}

    </Spring>

  );
}

export default App;
