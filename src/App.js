import React from 'react';
import Todo from './Component/Todo';
import './App.css';
import Template from './Component/TodoTemplate';
import FlipMove from "react-flip-move";



class App extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
         todos:[],
    }
}

addTodo = (title) =>{
  console.log(title)
  let todos=[...this.state.todos];
  let id= todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
  let newTodo={
    id,
    title,
    status:false
  };
  todos.push(newTodo);
  this.setState({todos:todos})


}
completeTodo = (id) =>{
  let todos =[...this.state.todos]
  todos.filter(todo=>{
    if(todo.id === id){
      todo.status=true;
    }
  })
  this.setState({todos})
}
deleteTodo = (id) =>{
  let todos =[...this.state.todos]
  todos.filter((todo,index) => {
    if(todo.id === id){
      todos.splice(index,1);
    }
  })
  this.setState({todos})
}
  render(){
    return (
      <div className="App1">
        <Todo addTodo={(todo) => this.addTodo(todo)}/>

          <div className="App">
          <FlipMove duration={500} easing="ease-out">
          {this.state.todos.map(todo =>(
                  <Template keys={todo.id} 
                            todoData={todo} 
                            completeTodo={(id) => this.completeTodo(id)} 
                            deleteTodo={(id) => this.deleteTodo(id)}/>
              ))}
        </FlipMove>

          </div>
      </div>
    );
  }
}

export default App;
