import React, {Component} from 'react';
import { NavLink, Switch, Route, Redirect,useLocation } from "react-router-dom";
import Thumbnail from './Thumbnail';
export default function gallery(){
    const IMAGES = [
        { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
        { id: 1, title: "Lime Green", color: "LimeGreen" },
        { id: 2, title: "Tomato", color: "Tomato" },
        { id: 3, title: "Seven Ate Nine", color: "#789" },
        { id: 4, title: "Crimson", color: "Crimson" }
      ];
    let location = useLocation();
    return(
        <div>
            {IMAGES.map(i => (
                <NavLink 
                key={i.id}
                to={{
                    pathname: `/img/${i.id}`,
                    state: { background:location}
                }}>
                    <Thumbnail color={i.color}/>
                    <p>{i.title}</p>
                </NavLink>
            ))}
            <h5>
                <NavLink to="/">home</NavLink>
            </h5>
        </div>

    )
}