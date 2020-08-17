import React from 'react';
import axios from "axios";
class BackSearch extends React.Component {
    state = {suggestions:[],
              text:""}
  render(){
        const handleChange = (e) => {
      e.preventDefault();
     this.setState({[e.target.name]:e.target.value});
     axios.post("http://localhost:5000",this.state).then((resp) => {
         this.setState({suggestions:resp.data.myArr})})}
       const displayFunction = () => {
         console.log(this.state.suggestions);
      return  this.state.suggestions.map(item => {
              return(
                <div>
                  {item}
                </div>
       )})
    }
  return (
    <div className="AutoCompleteText"> 
    <form>
      <input type = "search" value = {this.state.text} onChange = {handleChange} placeholder = "search" name = "text"></input>
      <input type = "submit" value = "search"  ></input>
    </form>
    {displayFunction()}
    </div>
  )}}
export default BackSearch;
