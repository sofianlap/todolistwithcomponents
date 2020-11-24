import './App.css';
import React from 'react'
import AddNewToDo from "./components/AddNewToDo";
import NewList from "./components/NewList";

class App extends React.Component {
  //list des todos en state
  state = {
    todos: [
      { list: "gotomycode", id: 1, isDone: false },
      { list: "gobackhome", id: 2, isDone: false },
      { list: "doworkout", id: 3, isDone: false }
    ],
    
  }


  //fonction qui change isDone
  handlecomplete = index => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === index ? { ...todo, isDone: !todo.isDone } : todo)
    })
  }
  //fonction remove qui supprime todolist
  removeToDo = index => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== index)
    })
  }
  //fonction qui ajoute une nouvelle todo
  addNewtoDO = (text) => {
    if(text.trim()===""){return alert ('inalid')}
    const newToDo = { list: text, id: this.state.todos.length, isDone: false }
    this.setState({
      todos: [...this.state.todos, newToDo]
    })
    
  }


  render() {
    return (
      <div className="App">
        <AddNewToDo  ajout={this.addNewtoDO}/>
        <div className="todocard">
          <NewList effacer={this.removeToDo} complet={this.handlecomplete} taches={this.state.todos}/>
        </div>

      </div>
    );
  }
}



export default App;