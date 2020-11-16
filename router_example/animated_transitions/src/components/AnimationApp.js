import React from 'react';
import "../styles.css";
import {
    NavLink,
    useLocation,
    useParams,
    Switch,
    Route,
}from 'react-router-dom';
import {
    TransitionGroup,
    CSSTransition
} from 'react-transition-group';
import HSL from "./HSL";
import RGB from "./RGB";
export default () => {
    let location = useLocation();
    return(
        <div className="style_fill">            
            <ul className="style_nav">
                <li className="style_navItem">
                    <NavLink to="/" style={{color: "inherit"}}>Home</NavLink>
                </li>
                <li className="style_navItem">
                    <NavLink to="/hsl/10/90/50" style={{color: "inherit"}}>Red</NavLink>
                </li>
                <li className="style_navItem">
                    <NavLink to="/hsl/120/100/40" style={{color: "inherit"}}>Green</NavLink>
                </li>
                <li className="style_navItem">
                    <NavLink to="/rgb/33/150/243" style={{color: "inherit"}}>Blue</NavLink>
                </li>
                <li className="style_navItem">
                    <NavLink to="/rgb/240/98/146" style={{color: "inherit"}}>Pink</NavLink>
                </li>
            </ul>
            {/*
            <div className="style_content">
                <Switch location={location}>
                    <Route path="/hsl/:h/:s/:l" component={HSL}/>
                    <Route path="/rgb/:r/:g/:b" component={RGB}/>
                </Switch>
            </div>
            */}
            
            <div className="style_content">
                <TransitionGroup>
                    <CSSTransition
                    key={location.key}
                    className="fade"
                    timeout={300}
                >
                    <Switch location={location}>
                        <Route path="/hsl/:h/:s/:l" component={HSL}/>
                        <Route path="/rgb/:r/:g/:b" component={RGB}/>
                    </Switch>
                </CSSTransition>
                </TransitionGroup>
            </div>
            
        </div>
    )
}