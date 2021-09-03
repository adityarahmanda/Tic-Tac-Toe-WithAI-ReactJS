import React from "react";
import { difficulties } from "../index";

const Settings = ({value, onClick}) => {
    return(
        <div className="settings">
            <h5>Settings</h5>
            <div className="left-align">Difficulty</div>
            <div className="dropdown left-align">{value}<div className="down-arrow" />
                <div className="dropdown-contents">
                    <div onClick={() => onClick(difficulties.EASY)}>{difficulties.EASY}</div>
                    <div onClick={() => onClick(difficulties.MEDIUM)}>{difficulties.MEDIUM}</div>
                    <div onClick={() => onClick(difficulties.HARD)}>{difficulties.HARD}</div>
                </div>
            </div>
        </div>
    );
}

export default Settings;