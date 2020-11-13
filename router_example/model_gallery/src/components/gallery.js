import React, {Component} from 'react';
import { NavLink, Switch, Route, Redirect,useLocation } from "react-router-dom";
import Thumbnail from './Thumbnail';
import {ImgArray} from './ExternalArray';
export default (props) => {
    
    let location = useLocation();
    return(
        <div>
            {ImgArray.map(i => (
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

