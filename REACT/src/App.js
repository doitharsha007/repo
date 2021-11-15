import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import Char from './Char/Char';

class App extends Component {
  state={
    userInput:''
  }
  InputChangeHandler=(event)=>{
    this.setState({userInput:event.target.value});
  }
  DeleteCharComponentHandler=(index)=>{
    const text=this.state.userInput.split('');
    text.splice(index,1);
    const updatedText=text.join('');
    this.setState({userInput:updatedText});
  }
  render(){
    const charList=this.state.userInput.split('').map((ch,index)=>{
      return <Char character={ch} key={index} clicked={()=>this.DeleteCharComponentHandler(index)}/>
    });
  return (
    <div className="App">
      <UserInput changed={this.InputChangeHandler} value={this.state.userInput}/>
      <ValidationComponent length={this.state.userInput.length}/>
      {charList}
    </div>
  );
}
}

export default App;
