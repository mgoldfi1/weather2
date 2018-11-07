import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './day'


class App extends Component {

  state = {
    word: "hello",
    query: '',
    days: []
  }

  handleChange = (event) => {
    this.setState({query: event.target.value })
  }

  componentWillMount() {
    fetch("https://api.aerisapi.com/forecasts/11362?client_id=KrGsqGnltb4UcurYZKjTm&client_secret=5XekSYdmY19G5V5hjNj10LVjdDfWDE1Aoy4y7eGK")
    .then(res => res.json())
    .then(json => {console.log(json.response[0].periods); this.setState({days: [...json.response[0].periods]}) })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Weather API
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </header>
        {this.state.query}
        {this.state.days.map(
          day => <span><Day icon={day.icon} date={day.dateTimeISO} maxC={day.maxTempC} maxF={day.maxTempF} minF={day.minTempF} minC={day.minTempC}/></span>
        )}
      </div>
    );
  }
}

export default App;
