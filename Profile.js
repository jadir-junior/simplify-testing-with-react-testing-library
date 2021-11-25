import React, { useState } from "react";

const Profile = ({ name, title, details }) => {
  const [showDetails, setShowDetails] = useState(true);

  const toogleDetails = () => setShowDetails(!showDetails);

  return (
    <div style={{ width: "18rem" }}>
      <img src="http://fakeimg.pl/286x180?font=lobster" alt="Card cap" />
      <div>
        <h5>{name}</h5>
        <p>{title}</p>
        <button onClick={toogleDetails}>
          {showDetails ? "Hide" : "Display"} Details
        </button>
        {showDetails && <div>{details}</div>}
      </div>
    </div>
  );
};

export { Profile };
