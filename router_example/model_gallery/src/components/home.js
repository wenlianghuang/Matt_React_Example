import { NavLink, Switch, Route, Redirect,useLocation } from "react-router-dom";
import React from 'react';

export default function home(props){
    return(
        <div>
            <NavLink to="/gallery">Visit the Gallery</NavLink>
            <h2>Featured Images</h2>
            <ul>
                <li>
                    <NavLink to="/img/2">
                        Tomato
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/img/4">
                        Crimson
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}