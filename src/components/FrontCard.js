import ProfileImage from "../assets/images/avatar.jpg";

const FrontCard = (params) => {
  return (

    <div className="front-card" onClick={params.handleEvent} onMouseEnter={params.handleEvent} onMouseLeave={params.handleEvent}>
      <img src={ProfileImage} alt="Avatar" loading="lazy"
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