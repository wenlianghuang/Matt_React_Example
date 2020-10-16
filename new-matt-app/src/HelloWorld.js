import React from 'react';
import ReactDOM from 'react-dom';
import './HelloWorld.css';
//import './HelloWorld.scss';

export default class HelloWorld extends React.Component {

    shoot = (a) => {
        alert(a)
    }
    render(){
        return (
        
        <div>
            <div id="reacthelloworld">
                <p >Hello World</p>
                <button onClick = {() => this.shoot("Goal")}>Take the shot</button>
            </div>
        </div>
        
        )
    }
}