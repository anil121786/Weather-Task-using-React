import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText : '',
      webData: ''
    }
    this.updateText = this.updateText.bind(this);
    this.getData = this.getData.bind(this);
  }

 updateText(e){
   this.setState({searchText: e.target.value})
 }
 getData(){
   let x = axios.get('https://api.openweathermap.org/data/2.5/weather?q='+this.state.searchText+'&appid=c47d8894d3074829c17d9ff1e70584b4')
       .then(function (response) {
          console.log(Object.keys(response.data));
          console.log(response.data)
          return response.json();
        })
       .catch(function (error) {
          console.log("Sorry bro, something went wrong",error);
       })
       .then(function () {
          console.log("THANK YOU VISIT AGAIN");
       })
      //console.log("Im x"+JSON.parse(x))
       this.setState({
      //  //ReactDOM.findDOMNode(this.refs.search).focus();
       webData : x});
 }

  render () {
    return (
      <div className='app'>
        <div><input type="text"  ref = "search" value = {this.state.searchText} onChange = {this.updateText} placeholder="Search"/>
            <button className='button' onClick={this.getData}>Get Weather</button>
        </div>
        <p>{this.state.webData + "Web data " + console.log(typeof this.state.webData)}</p>
      </div>
    )
  }
}

// class Description extends React.Component{
  
// }
class App extends Component {
  render(){
    return(
      <div>
        <Search />
        {/* <Description /> */}
      </div>
    )
  }
}

export default App
