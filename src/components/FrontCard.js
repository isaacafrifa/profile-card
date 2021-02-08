import ProfileImage from "../assets/images/avatar.jpg";
import { Spring } from 'react-spring/renderprops';

const FrontCard = (params) => {
  return (
 <Spring
      // fade in & slide effect
      from={{ opacity: 0, marginRight: -1000 }}
      to={{ opacity: 1, marginRight: 0}}
      config={{delay: 4000}}> 
      {/* setting delay to match ProgressSpinner Timeout in App component */}

      {props => (
        <div style={props}>
    <div className="front-card" onClick={params.handleEvent} onMouseEnter={params.handleEvent} onMouseLeave={params.handleEvent}>
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
    </div>
      )}
    </Spring>
  );
}

export default FrontCard;