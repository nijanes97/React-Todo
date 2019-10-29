import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ''
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now()
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    });
  };

  changeTodo = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  toggleCompleted = id => {
    let tempTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ tempTodos });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log('working')
    let tempTodos = this.state.todos.filter(todo => todo.completed === false);
    console.log(tempTodos);
    this.setState({ 
      todos: tempTodos,
      todo: '' 
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <h2>Todo List</h2>
        <TodoForm
          value={this.state.todo}
          changeTodo={this.changeTodo}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
        <TodoList
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
