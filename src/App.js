import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import { RotatingLines  } from  'react-loader-spinner'

class App extends React.Component {
  constructor(Props){
    super(Props);
    this.state={
      Country:'',
      temp:'',
      loader:false
    }
  }
  onSearch=()=>{
  this.setState({loader:true});

  let url='https://api.openweathermap.org/data/2.5/weather?appid=294e1af8c2528c8a13b05bfa4dda5e2c&units=metric&q='+this.state.Country;
  axios.put(url).then((response)=>{console.log("response",response)
  this.setState({
    temp:response.data.main.temp,
    loader:false
  })
})
  }

  render(props){
    console.log("this.state",this.state);
    console.log(this.props.name);
  return (
    <div id="root">
      <p>Hari krishna is great</p>
      <h5>Enter Country</h5>
      <input type="text" name="Country" onChange={(e)=>this.setState({Country:e.target.value})} />
      <button id="click" onClick={()=>this.onSearch()}>Search</button>
      <h6>Current temerature in {this.state.Country} is {this.state.temp}</h6>

   

    </div>
  );
  }
}

export default App;
