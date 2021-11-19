import './App.css';
import Top from './component/Top';
import React, { Component } from 'react';
import Date from './component/DisplayDate';
import Sender from './component/Sender';
import Receiver from './component/Receiver';
import Transaction from './component/Transaction';

class App extends Component {
  state={
    users:[{
      customerId:83020817828620,
      accountHolderName:"A KRISHNA MOHAN",
      clearBalance:56000
    },
  {
    customerId:71319440983198,
      accountHolderName:"A M MAYANNA",
      clearBalance:224000
  }],
  currentuser:null,
  accountHolderName:'',
  clearBalance:null
  }
  senderChangeHandler=(event)=>{
    if(event.target.value.length>=14){
    let arr=this.state.users;
    let foundName='user not found';
    let tobeFoundName=Number(event.target.value);
    let foundBalance=null;
    for (let index = 0; index < arr.length; index++) {
      if(tobeFoundName===arr[index].customerId){
      foundName=arr[index].accountHolderName;
      foundBalance=arr[index].clearBalance;
      }
    }
    this.setState({currentuser:event.target.value,accountHolderName:foundName,clearBalance:foundBalance});
  }
  }
  render(){
  
  return (
    <div className="App">
      <Top/>
      <Date/>
      <div className="sender-class">
      <Sender changed={this.senderChangeHandler} 
      accountHolderName={this.state.accountHolderName} 
      clearBalance={this.state.clearBalance}/>
      </div>
      <Receiver/>
      <Transaction/>
    </div>
  );
}
}

export default App;

