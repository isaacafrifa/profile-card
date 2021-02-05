
const BackCard = (props) => {
  return (

    <div className="back-card" onClick={props.handleEvent} onMouseEnter={props.handleEvent} onMouseLeave={props.handleEvent}>

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

  );
}

export default BackCard;