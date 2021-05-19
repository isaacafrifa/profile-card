import { useState, useEffect } from "react";
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'
import ReactCardFlip from 'react-card-flip';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
// import ProfileImage from "../assets/images/avatar.jpg";
import { Envelope, Linkedin, Github, Camera, Gift, Globe } from 'react-bootstrap-icons';


function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isFlipped, setIsFlipped] = useState(false)

  //Set Timing for ProgressSpinner
  setTimeout(() => {
    setIsLoading(false)
  }, 2000);

  //Initial flip effect
  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(true)
    }, 3000);

    setTimeout(() => {
      setIsFlipped(false)
    }, 4500);
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

  //Spring Props
  const props = useSpring({
    // fade in and slide effect
    from: { opacity: 0, marginLeft: -500 },
    to: { opacity: 1, marginLeft: 0 },
    delay: 2000
  })

  //Spring Props
  const socialsProps = useSpring({
    // fade in and slide effect
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2500
  })

  return (
    <div className="App">
      <Container>
        {/* Show ProgressSpinner */}
        {isLoading ? (
          <div className="loader">
            <Spinner animation="border" variant="info" />
          </div>
        ) :
          (
            /* --- MAIN CONTENT --- */
            <section>
              {/* Profile Card */}
              <animated.div style={props}>
                <Row>
                  <Col md={{ span: 8, offset: 2 }} >

                    {/* Card Flip  */}
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront="1.8" flipSpeedFrontToBack="1.8">

                      <FrontCard
                        handleEvent={handleEvent} />
                      <BackCard
                        handleEvent={handleEvent} />

                    </ReactCardFlip>

                  </Col>
                </Row>
              </animated.div>

              <animated.div style={socialsProps}>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <div className="comp3">
                      <a className="icon-box" href="https://www.isaacafrifa.com"><Globe size={24} /></a>
                      <a className="icon-box" href="mailto:isaac.afrifa3@yahoo.com"><Envelope size={24} /></a>
                      <a className="icon-box" href="https://www.linkedin.com/in/isaac-afrifa-9aa543106"><Linkedin size={24} /></a>
                      <a className="icon-box" href="https://bitbucket.org/mrblo"><Github size={24} /></a>
                      <a className="icon-box" href="https://www.flickr.com/photos/afrifa/"><Camera size={24} /></a>
                    </div>
                  </Col>

                </Row>

              </animated.div>

              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <div className="comp4">
                    <div class="mytooltip">
                      <Gift className="giftButton" color="#428bca" size={48} />
                      <span class="tooltiptext">Portfolio Site is Ready!
                      <a href="https://www.isaacafrifa.com"> Click here</a>
                      </span>
                    </div>
                  </div>
                </Col>

              </Row>
            </section>)}

      </Container>

    </div>
  );
}

export default App;
