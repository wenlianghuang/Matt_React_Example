import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../css/TestinClass.css'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Waht is the brand of car",
      captionName: '',
      inputArray: []
      //captionName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.getSubjectandScores = this.getSubjectandScores.bind(this);
  }

  handleChange(event) {

    this.setState({value: event.target.value})

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
    let records = this.props.scoreCard.records.map(e => e.map(g=> <td>{g}</td>))
    //let test = this.state.a.map
    //let test = this.state.inputArray.map((currElement,index)=>{return(currElement)})
    return (
      <div className="FormClass">
          <label>Your Name: </label>
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
        
        <select class="greentext" onChange={this.handleChange}>
          <option disabled="disabled" selected="selected">Test</option>
          <option class="greentext" value="Audi">Audi</option>
          <option class="redtext" value="BMV">BMW</option>
          <option class="bluetext" value="Mercedes">Mercedes</option>
          <option class="yellowtext" value="Volvo">Volvo</option>
        </select>
        <p class="demo">{this.state.value}</p>
        
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
              <tr key={index}><td>{currValue.sub}</td><td>{currValue.sco}</td></tr>
            ))}
            
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Form;

/*const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
*/