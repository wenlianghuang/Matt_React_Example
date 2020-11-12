import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect,useLocation } from "react-router-dom";
import gallery from '../components/gallery';
import home from '../components/home';
import imageview from '../components/ImageView';
export default function Blog(){
    let location = useLocation();
    
    return(
        
        <div>
            {/*
            <NavLink to="/">Home</NavLink>
            <hr/>
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
            */}
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/gallery" component={gallery} />
                <Route path="/img/:id?" component={imageview} />
            </Switch>
        </div>
            
        )
}