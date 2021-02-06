
const BackCard = (props) => {
  return (
    <div className="back-card" onClick={props.handleEvent} onMouseEnter={props.handleEvent} onMouseLeave={props.handleEvent}>

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


          <div className="comp2">
  
          </div>
        </div>
      </div>
    </div>


  
  );
}

export default BackCard;