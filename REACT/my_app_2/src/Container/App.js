import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import classes from './App.css'

class App extends Component{
  state={
    persons:[
      {id:'kxswe',name:'Max',age:28},
      {id:'khsckj',name:'Manu',age:29},
      {id:'jahdy',name:'Stephanie',age:26}
    ],
    showPersons:false
  }
  inputChangeHandler=(event,id)=>{
    const personindex=this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person={
      ...this.state.persons[personindex]
    };
    person.name=event.target.value;
    const persons=[...this.state.persons];
    person[personindex]=person;
    this.setState({persons:person});
  }
  deletepersonhandler=(personindex)=>{
    const persons=[...this.state.persons];
    persons.splice(personindex,1);
    this.setState({persons:persons});
  }
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
  render(){
    let persons=null;
    let btnClass='';
    if (this.state.showPersons){
      persons=(
        <div>
          <Persons
          person={this.state.persons}
          clicked={this.deletepersonhandler}
          changed={this.inputChangeHandler}
          />
        </div>
      );
      btnClass=classes.red;
    }
    const assignedClasses=[];
    if(this.state.persons.lengt<=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }
    return(
    <div className="App">
      <h1>hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button className={btnClass}
      onClick={this.togglePersonHandler}>Toggle Persons</button>
      {persons}
    </div>
    );
  };
}
 
export default App;
