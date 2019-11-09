import React from 'react';
import './App.css';
import Person from './Person/Person'


class App extends React.Component{

  state = {
    People:[
      {name:'Ebrahim' , age:'25'},
      {name:'Alison' , age:'28'},
      {name:'Eric' , age:'28'}
    ]
  }

 switchNameHandler = (newName) => {
   console.log('in here')
   this.setState({
     People:[
       {name:newName , age:'25'},
       {name:'Alison' , age:'28'},
       {name:'Eric' , age:'28'}
     ],
     showPersons:false
  })
}

nameChangedHandler= (event) =>{
  this.setState({
    People:[
      {name: "Ebrahim" , age:'25'},
      {name: event.target.value , age:'28'},
      {name:'Eric' , age:'28'}
    ]
 })
}

togglePersonHandler = () =>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}



render(){

let people = null;

if (this.state.showPersons){
  people = (
    <div>
    {this.state.People.map(person => {
      return <Person name={person.name} age={person.age} />
    })}

    <Person
    name={this.state.People[0].name}
    age={this.state.People[0].age} />
    <Person
    name={this.state.People[1].name}
    age={this.state.People[1].age}
    click={this.switchNameHandler.bind(this, 'wtf')}
    changed={this.nameChangedHandler}>
    hobbies:sex
    </Person>
    <Person
    name={this.state.People[2].name}
    age={this.state.People[2].age} />
    </div>
  )
}



  const style = {
    backgroundColor:'red',
    font:'inherit',
    border:'1px solid blue',
    padding: '8px',
    cursor:'pointer'
  };


return(
    <div className = "App">
      <h1>hey how are you doing</h1>
      <button style={style}
      onClick= {this.togglePersonHandler}>switch name</button>
      {people}
      </div>


)}
}

// state = {
//   People:[
//     {name:'Ebrahim', age:'25'},
//     {name:'Alison', age:'28'},
//     {name:'Eric', age:'28'}
//   ]
// }
//
// switchNameHandler = () => {
//   //console.log('was clicked
//   this.setState({
//     People:[
//       {name:'User', age:'25'},
//       {name:'Alison', age:'28'},
//       {name:'Eric', age:'28'}
//     ]
//   })
// }


export default App;
