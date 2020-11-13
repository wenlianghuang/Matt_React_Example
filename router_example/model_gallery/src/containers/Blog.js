import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect,useLocation } from "react-router-dom";
import gallery from '../components/gallery';
import home from '../components/home';
import imageview from '../components/ImageView';
import Modal from '../components/Modal';
export default function Blog(){
    let location = useLocation();
    
    /*這個background很重要!!!!仔細看location is the children in useLocation
     *而在state下面其實有他的children名"background"，background裡的pathname其實就是
     *img/<number> 的母親pathname，也就是"gallery"，所以要記得，location.state和
     *location.state.background要一起assign to the variable background材能完整
     */
    let background = location.state && location.state.background;
    
    //console.log("Location: ",location);
    //console.log("Background: ",background);
    
    return(    
        <div>
            {/**location: 它會會去找你想要的URL,default上就是跟著按了哪個URL,他就會顯示URL下的結果
             */}
            <Switch location={background || location}>
                
                <Route exact path="/home" component={home} />
                <Route path="/gallery" component={gallery} />
                <Route path="/img/:id" component={imageview} />
                {/*every "/" URL(here is to use "npm star") will redirect to the url "/home"*/}
                <Redirect from="/" to="/home"/>
            </Switch>

            {/**
              在background下置入Modal function
            */}
            {background && <Route path="/img/:id" component={Modal}/>}
            
        </div>
            
        )
}