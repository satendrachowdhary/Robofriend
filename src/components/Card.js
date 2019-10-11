import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bw-2 shadow-5 pa3 bg-light-green dib ma2 grow br3 ">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
