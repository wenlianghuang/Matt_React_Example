import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './HelloWorld.js';
import * as serviceWorker from './serviceWorker';
import ReactEvOb from './EventObj.js';
import MyForm from './MyFormClass.js';
import RoundImage from './Round.js';
import Toggle from './ToggleEx.js';
import Car from './CarEx.js';
import TestforMe from './TestinClass.js';

//From the "export" of "TestinClassData.js"
import {columnIndex,scoreCard} from './TestinClassData.js';


//Origin in create-react-app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//The simplest "Hello World" and its button "Take the shot"
ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('helloworld')
)

// Has button "Take the shoot" with its type is "click"
ReactDOM.render(
  <ReactEvOb/>,
  document.getElementById("reacteventobj")
)
//Important element "input" with their title "Enter your name" and "Enter your age"
ReactDOM.render(
  <MyForm/>,
  document.getElementById("myformclass")
)
//RoundImage
ReactDOM.render(
  <RoundImage/>,
  document.getElementById('roundimage')
)
//Toggled button with "ON" or "OFF"
ReactDOM.render(
  <Toggle/>,
  document.getElementById("toggleex")
)

//To check the "dangerouslySetInnerHTML" instead of original DOM
ReactDOM.render(
  <Car/>,
  document.getElementById("Car")
)

//Class 5 practicec
ReactDOM.render(
  <TestforMe scoreCard = {scoreCard} columnIndex = {columnIndex}/>,
  document.getElementById("ExampleinClass")
);


/*
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === "age") {
      if (val !=="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      {this.state.errormessage}
      </form>
    );
  }
}*/

/*
class Car extends React.Component{
  render(){
    return <h2>Hi! I am a Car!</h2>

  }
}
ReactDOM.render(<Car/>,document.getElementById('root'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
