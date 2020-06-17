import React, { Fragment } from "react";

const Card = (props) => {
    const {name, username, email, id} = props
  return (
    <Fragment>
      <div className="tc bg-green near-white dib br3 pa2 ma2 grow bw1 shadow-4">
          <h2>{name}</h2>
        <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
        <div>
          <p>{username}</p>
          <p>{email}</p>

        </div>
      </div>
    </Fragment>
  );
};

export default Card;
