import React, { Fragment } from "react";

const Card = (props) => {
    const {name, username, email, id} = props
  return (
    <Fragment>
      <div className="tc bg-green dib br3 pa2 ma2 grow bw1 shadow-4">
          <h2 className='fName'>{name.toUpperCase()}</h2>
        <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
        <div>
          <p className='uName'>{username}</p>
          <p className='email'>{email}</p>

        </div>
      </div>
    </Fragment>
  );
};

export default Card;
