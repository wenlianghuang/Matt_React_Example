import React from 'react';

export default class ReactEvOb extends React.Component{
    shoot = (a,b) =>{
        alert(b.type);
    }

    render(){
        return(
            <button onClick = {this.shoot.bind(this,"Goal")}>Take the shot</button>
        );
    }
}