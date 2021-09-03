import React from "react";
import { playmodes } from "../index.js";

const MainMenu = ({onClick}) => (
    <div className="main-menu centered">
      <h3>Choose your play mode</h3>
      <div className="menu">
        <button className="btn with-ai" onClick={() => onClick(playmodes.WITH_AI)}><span>{playmodes.WITH_AI}</span></button>
      </div>
      <div className="menu">
        <button className="btn with-friend" onClick={() => onClick(playmodes.WITH_FRIEND)}><span>{playmodes.WITH_FRIEND}</span></button>
      </div>
    </div>
);

export default MainMenu;