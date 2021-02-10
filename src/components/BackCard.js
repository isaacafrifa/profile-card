import { Container, Row, Col } from 'react-bootstrap';

const BackCard = (props) => {
  return (
    <div className="back-card" onClick={props.handleEvent} onMouseEnter={props.handleEvent} onMouseLeave={props.handleEvent}>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} >
            <div className="back-content">
              <h4>Web & Mobile App Development</h4>
              <div className="comp1">

                <p><span className="purple">const </span> mySkills <span className="cyan">=</span>  {'{'}
                  <br />
                  <span className="space red">languages</span>
                  <span className="cyan"> :</span> <span className="green">[ 'Java', 'Javascript', 'SQL', 'Kotlin' ]</span> ,
          <br />
                  <span className="space red">technologies</span>
                  <span className="cyan"> :</span> <span className="green">[ 'Spring Boot', 'Android', 'React', 'CI/CD', 'Docker' ]</span> ,
          <br />
                  <span className="space red">architectures</span>
                  <span className="cyan"> :</span>
                  <span className="green"> [ 'REST', 'Microservices', 'Monoliths' ]</span> ,
          <br />
                  <span className="space red">otherSkills</span><span className="cyan"> :</span> <span className="green">[ 'Digital Forensics', 'Photography',
          'Team Player' ]</span>
                  <br />
                  {'}'};
        </p>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default BackCard;