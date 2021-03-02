import { useState, useEffect } from "react";
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
import ReactCardFlip from 'react-card-flip';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
// import ProfileImage from "../assets/images/avatar.jpg";
import { Envelope, Linkedin, Github, Camera } from 'react-bootstrap-icons';


function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)

  //Set Timing for ProgressSpinner
  setTimeout(() => {
    setIsLoading(false)
  }, 4000);

  //Initial flip effect
  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(true)
    }, 6000);

    setTimeout(() => {
      setIsFlipped(false)
    }, 7500);
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
        isFlipped ? setIsFlipped(false) : setIsFlipped(true)
        break;

      default:
        setIsFlipped(false)
        break;
    }
  }

  return (
    <Spring
      // fade in and slide effect
      from={{ opacity: 0,marginLeft: -500  }}
      to={{ opacity: 1,marginLeft: 0  }}>

      {props => (
        <div style={props}>
          <div className="App">
            <Container>
              {/* Show ProgressSpinner */}
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
                                         
                        <FrontCard
                          handleEvent={handleEvent} />
                        <BackCard
                          handleEvent={handleEvent} />
              
                  </ReactCardFlip>

                </Col>
              </Row>

              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <div className="comp3">
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
