import React from "react";
import { playmodes } from "../index";

const NavMenu = ({value, gameStatus, onClick}) => {
    return(
        <nav class="nav-menu">
            <ul>
                <li>
                    <span className={((value === playmodes.WITH_AI) && gameStatus) && "active"} 
                          onClick={() => onClick(playmodes.WITH_AI)}>
                    Play {playmodes.WITH_AI}</span>
                </li>             
                <li>
                    <span className={((value === playmodes.WITH_FRIEND) && gameStatus) && "active"} 
                          onClick={() => onClick(playmodes.WITH_FRIEND)}>
                    Play {playmodes.WITH_FRIEND}</span>
                </li>           
            </ul>
        </nav>
    );
}

export default NavMenu;