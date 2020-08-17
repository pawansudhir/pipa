import React from 'react';
import axios from "axios";
import  "./autocomplete.css";
import BackSearch from "./components/backendSearch";
import HamburgerMenuPage from "./components/hamburger";
class App extends React.Component {
  state = {
    suggestion:[],
    text:""
  }
  render(){
    var items = ["pawan","suhdir","pawa","sudh","rep","reply","represent"]
 var handleFClick = (e) => {
  const {value} = e.target;
  if(value.length === 0){
    this.setState({suggestion:[]});
  }
  else{
    const regex = new RegExp(`${value}`,"i");
    const suggestions = items.filter(v => {
      return regex.test(v);
    });
    this.setState({suggestion:suggestions});
  }
  }
  const changeValue = (item) => {
     this.setState({
       text:item,
       suggestion:[]
     });
  }
  const renderSuggestion = () => {
    const {suggestion} = this.state;
    if(suggestion.length === 0){return null;}
    else{
      return(
        <ul>
          {suggestion.map(item => {
            return(
            <p onClick = {() => {changeValue(item)}}>{item}</p>
            )
          })}
        </ul>
      )
    }
  }
  return (
    <div className="AutoCompleteText"> 
    <HamburgerMenuPage />
      <input value = {this.state.text} type = "search" onChange = {handleFClick} palceholder = "search" ></input>
      <input type = "submit" ></input>
     {renderSuggestion()}
     <BackSearch />
    </div>
  );
}
}
export default App;
