import React, { useState } from "react";

export type ProfileProps = {
  name: string;
  title: string;
  details: string;
};

const Profile = ({ name, title, details }: ProfileProps) => {
  const [showDetails, setShowDetails] = useState(true);

  const setDetails = () => setShowDetails(!showDetails);

  return (
    <div>
      <img src="http://fakeimg.pl/286x180?font=lobster" alt="Card cap" />
      <div>
        <h5>{name}</h5>
        <p>{title}</p>
        <button onClick={setDetails}>
          {showDetails ? "Hide" : "Display"} Details
        </button>

        {showDetails && <p>{details}</p>}
      </div>
    </div>
  );
};

export { Profile };
