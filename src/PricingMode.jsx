import React from "react";
import "./App.scss";

function PricingMode({ type, price, storage, allowed_user, send_limit }) {
  return (
    <div className="component">
      <p>
        <b>{type}</b>
      </p>
      <h1 className="price">
        <small>$</small>
        {price}
      </h1>
      <hr />
      <p>
        {storage >= 1000
          ? `${storage / 1000} TB Storage`
          : `${storage} GB Storage`}
      </p>
      <hr />
      <p>{allowed_user} Users Allowed</p>
      <hr />
      <p>Send up to {send_limit} GB</p>
      <hr />
      <br />
      <button className="learn-more">Learn More</button>
    </div>
  );
}

export default PricingMode;
