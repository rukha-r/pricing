import React, { useState } from "react";
import data from "./data.js";
import "./App.scss";
import { BsToggleOn } from "react-icons/bs";
import PricingMode from "./PricingMode";

function App() {
  const init_data = data;
  const [switcher, setSwitch] = useState(false);
  const toggleMode = () => {
    setSwitch(!switcher);
  };
  return (
    <div className="main-wrapper">
      <h1>Our Pricing</h1>
      <div className="header">
        <div>
          <h5>Annually</h5>
        </div>
        <div onClick={toggleMode}>
          {switcher ? (
            <BsToggleOn className="Annually" />
          ) : (
            <BsToggleOn className="Monthly" />
          )}
        </div>
        <div>
          <h5>Monthly</h5>
        </div>
      </div>
      <div className="mode-types">
        {init_data.map((data) => (
          <PricingMode
            type={data.type}
            price={switcher ? Number(data.price * 10).toFixed(2) : data.price}
            storage={data.storage}
            allowed_user={data.allowed_user}
            send_limit={data.send_limit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
