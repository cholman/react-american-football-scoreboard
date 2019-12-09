import React, {useState} from "react";
import "./App.css";
import App from "./App";

const BottomRow = () => {

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Map</h3>
        <div className="down__value">2</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Eco</h3>
        <div className="toGo__value">43k</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Eco</h3>
        <div className="ballOn__value">23k</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Round</h3>
        <div className="quarter__value">14</div>
      </div>
    </div>

  );
};

export default BottomRow;
