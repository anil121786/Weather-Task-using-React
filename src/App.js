import React, { Component } from 'react'
import './App.css'
import axios from 'axios';

class App extends Component {
  constructor () {
    super()
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather () {
     axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=40cb8d688c25291a4fe87a94407b90a0')
       .then(function (response) {
        // handle success
        console.log(typeof response.data)
        console.log(Object.keys(response.data));
        console.log(response.data)
       })
       .catch(function (error) {
         console.log("Sorry bro, something went wrong",error);
       })
       .then(function () {
         console.log("THANK YOU VISIT AGAIN");
       });
          
          //single day https://api.darksky.net/forecast/40cb8d688c25291a4fe87a94407b90a0/17.3850,78.4867?units=auto
          
          //Forecast: https://api.darksky.net/forecast/40cb8d688c25291a4fe87a94407b90a0/17.3850,78.4867,2019-03-13T18:25:00Z?units=auto
       //FORECAST DATA
          //   axios.get('https://api.darksky.net/forecast/40cb8d688c25291a4fe87a94407b90a0/17.3850,78.4867,2019-03-13T18:25:00Z?units=auto')
      //  .then(function (response) {
      //   // handle success
      //   console.log(typeof response.data)
      //   console.log(Object.keys(response.data));
      //   console.log(response.data)
      //  })
      //  .catch(function (error) {
      //    console.log("Sorry bro",error);
      //  })
      //  .then(function () {
      //    console.log("THANK YOU VISIT AGAIN");
      //  });

  }

  render () {
    return (
      <div className='app'>
        <div className='btn-container'>
          <button className='button' onClick={this.getWeather}>Click Me</button>
        </div>
      </div>
    )
  }
}
export default App
