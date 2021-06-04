import React, { Component } from 'react'; 
import './App.css';
import Form from './Form'
import Result from './Result'

//API openWeather key
const APIkey = '00cf9ae50913943b693698e3875c45df';

class App extends Component {

  state = {
    value: '',
    date: '',
    location: '',
    sunrise: '',
    sunset: '',
    temp: '',
    feelTemp: '',
    humid: '',
    pressure: '',
    wind: '',
    windDirection: '',
    vision: '',
    clouds: '',
    err: '',
    
  }

  handleLocationSubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric`

    fetch(API)
    .then(response => {
      if(response.ok){
        return response
      }
      throw Error('Bład! Miejscowość nie znaleziona lub inny problem ;)')
    })
    .then(response => response.json())
    .then(data => {
      this.setState(prevState => ({
        date: new Date().toLocaleString(),
        location: prevState.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        feelTemp: data.main.feels_like,
        humid: data.main.humidity,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        vision: data.visibility,
        windDirection: data.wind.deg,
        clouds: data.clouds.all,
        err: false,
      }))
    })
    .catch(err => {
      this.setState(prevState => ({
        err: true,
        location: prevState.value,  
      }))
    })
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {

    return(
      <div className="App">
        <Form 
        value={this.state.value}
        change={this.handleInputChange}
        submit={this.handleLocationSubmit}/>
        <Result
        weather={this.state} />
      </div>
      
      
    )
  }
}

export default App;
