import React from 'react';
import '../../css/TestinClass.css'
class TestforMe extends React.Component{
    
    render(){
        let records = this.props.scoreCard.records.map(e => e.map(g=> <td>{g}</td>))
        return(
            
            <table>
                <caption>
                {this.props.scoreCard.name}'s Score
                </caption>
                <thead>
                    {this.props.columnIndex.map(e => <th> {e} </th>)}
                </thead>
                <tbody>
                    
                    {/*this.props.scoreCard.records.map( e => e.map( g => <td>{g}</td> ) ).map(e => <tr> {e} </tr> )*/
                    records.map(e => <tr> {e} </tr>)
                }
                </tbody>
            </table>
        )
    }   
}

export default TestforMe;