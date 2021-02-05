import ProfileImage from "../assets/images/avatar.jpg";

const FrontCard = (props) => {
  return (

    <div className="front-card" onClick={props.handleEvent} onMouseEnter={props.handleEvent} onMouseLeave={props.handleEvent}>
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
  );
}

export default FrontCard;