import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';


export default class Day extends Component {

  constructor(props) {
    super(props);
  }

  convertDate = () => {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date(this.props.date)
    let month = date.getMonth() + 1 ;
    let dayNum = date.getDate() ;
    let year = date.getFullYear() ;
    return days[date.getDay()] + ", " + month + '/' + dayNum + '/' + year
  }

  render() {
    return (
        <Panel style={{width: "13%", height: "20%", display: "inline-block"}}>
        <Panel.Heading><span style={{"font-size": "12px"}}><strong>{this.convertDate()}</strong></span></Panel.Heading>
        <Panel.Body>
        <img src={require(`./icons/${this.props.icon}`)} />
        <div>Minimum Temp {this.props.minF}(°F) | {this.props.minC}(°C)</div>
        <div>Maximum Temp {this.props.maxF}(°F) | {this.props.maxC}(°C)</div>
        </Panel.Body>
        </Panel>
    )
  }
}
