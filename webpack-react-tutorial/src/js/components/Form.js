import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../css/TestinClass.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AlertwithHook from './AlertDismissiblewithHook'
import List from 'react-bootstrap/ListGroup';
import ListGroup from "react-bootstrap/ListGroup";
class FormInClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Waht is the brand of car",
      captionName: '',
      inputArray: [],

    };

    this.handleChange = this.handleChange.bind(this);//Show the detail of different cars
    this.getSubjectandScores = this.getSubjectandScores.bind(this);
  }

  handleChange(event) {
    //let yearofManufacture = {keyname: "2000"}
    let yoM,Lit,miL;
    if(event.target.value === "Audi"){
      yoM = this.props.CarDetail.Audi[0][1];
      Lit = this.props.CarDetail.Audi[1][1];
      miL = this.props.CarDetail.Audi[2][1];

    }else if(event.target.value === "BMW"){
      yoM = this.props.CarDetail.BMW[0][1];
      Lit = this.props.CarDetail.BMW[1][1];
      miL = this.props.CarDetail.BMW[2][1];
      
    }else if(event.target.value === "Mercedes"){
      yoM = this.props.CarDetail.Mercedes[0][1];
      Lit = this.props.CarDetail.Mercedes[1][1];
      miL = this.props.CarDetail.Mercedes[2][1];
    }else if(event.target.value === "Volvo"){
      yoM = this.props.CarDetail.Volvo[0][1];
      Lit = this.props.CarDetail.Volvo[1][1];
      miL = this.props.CarDetail.Volvo[2][1];
    }
    this.setState({value: event.target.value,yom:yoM,lit: Lit,mil: miL})
  
  }


  getSubjectandScores(){
    var input = document.getElementsByName("array[]");
    let subjectandscore = this.state.inputArray.slice();
    let name = input[0].value
    let subject = input[1].value
    let scores = input[2].value
    subjectandscore.push({sub: subject, sco: scores})
    /*for(let i = 1; i < input.length; i++){
      subjectandscore.push(input[i].value);
      //this.props.scoreCard.records.map(e => e.push({a}))
    }*/
    let yourName = String(name + "'s Transcript");
    this.setState({
      captionName: yourName,
      inputArray: subjectandscore,
    });


    /*
    let yourName = a[0] + "'s Transcript";
    document.getElementsByClassName('yourName')[0].innerHTML = yourName;
    
    let TD1 = document.createElement("td");
    let TD2 = document.createElement("td");
    TD1.textContent = a[1];
    TD2.textContent = a[2];
    const TR = document.createElement("tr");
    TR.appendChild(TD1);
    TR.appendChild(TD2);
    document.querySelector(".TbodyClass").appendChild(TR);
    document.getElementsByClassName("TbodyClass")[0].value = ""
    */
    
  }
  

  render() {

    

    //this.setState({yoM: yearofManufacture});
    let records = this.props.scoreCard.records.map(e => e.map(g=> <td>{g}</td>))
    return (
      <div className="FormClass">
          <Form>
            <Form.Group controlId="formYourName">
              <Form.Label>Your Name</Form.Label>
              <div className="w-50">
                <input 
                type="text"
                name="array[]"
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <div className="w-50">
              <input
                type="text"
                name='array[]'
              /> 
              </div>
            </Form.Group>
            <Form.Group controlId="formScore">
              <Form.Label>Score</Form.Label>
              <div className="w-50">
                <input type="text"
                name='array[]'
              />
              </div>
            </Form.Group>
            
            <Button variant="flat" onClick={this.getSubjectandScores}>Submit</Button>
          </Form>
          {/*
          <label>Your Name </label>
          <br/>
          <input 
            type="text"
            name="array[]"
          />
          <br/>
          <label>Subject</label>
          <br/>
          <input
            type="text"
            name='array[]'
            
            //value={this.state.value}
            //onChange={this.handleChange}
          />
          <br/>
          <label>Scores</label>
          <br/>
          <input 
            type="text"
            name='array[]'
            
            //value={this.state.value}
            //onChange={this.handleChange}
          />
          <br/>
          <button onClick={this.getSubjectandScores}>Submit</button>
        <br/>
          
          */}
        {/* React Bootstrap of select and option */}
        <Form.Control
          as="select"
          custom
          onChange={this.handleChange}
          className="selectWidth"
          >
              <option disabled="disabled" selected="selected">Car Brandnew</option>
              <option value="Audi" className="AudiCheck">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Volvo">Volvo</option>
        </Form.Control>
        {/* Original select and option 
        <select onChange={this.handleChange}>
          <option disabled="disabled" selected="selected">Car Brandnew</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Volvo">Volvo</option>
        </select>
        */}
        
        
        <br/>
        <p class="demo">
          <ul>
            <li>
              {this.state.value}
              <ul>
                <li>
                  Year of Manufacture: {this.state.yom}
                </li>
                <li>
                  Litter: {this.state.lit}
                </li>
                <li>
                  Made in Location: {this.state.mil}
                </li>
              </ul>
            </li>
          </ul>
        </p>
        
        <table>
          
          <caption className="yourName">
            {this.state.captionName}
          </caption>
          
          <thead>
            {this.props.columnIndex.map(e => <th> {e} </th>)}
          </thead>
          <tbody className="TbodyClass">
            {/*
              records.map(e => <tr> {e} </tr>)
            */}
            
            
            {this.state.inputArray.map((currValue,index) => (
              <>
              <tr key={index}><td>{currValue.sub}</td><td>{currValue.sco}</td></tr>
              </>
            ))}
            
            
          </tbody>
        </table>
        {/** Hook for example */}
        <AlertwithHook/>
      </div>
    );
  }
}

export {FormInClass}
//ref: https://wcc723.github.io/development/2020/03/25/import-export/

