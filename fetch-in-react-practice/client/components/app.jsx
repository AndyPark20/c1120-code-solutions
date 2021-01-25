import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {

    fetch('/api/todos', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        const copy = this.state.todos.concat(data);
        this.setState({ todos: copy })
      })
      .catch(err => {
        return err;
      })
  }

  addTodo(newTodo) {

    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(resp => {
        return resp.json();
      })
      .then(result => {
        const copy = this.state.todos.concat(result)
        this.setState({ todos: copy })
      })
      .catch(err => {
        return err;
      })
  }

  toggleCompleted(todoId) {

    const test = this.state.todos.map(value => {
      if (todoId === value.todoId && value.isCompleted === false) {
        fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ isCompleted: true })
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.state.todos.map(values => {
              if (values.todoId === data.todoId) {
                const array = this.state.todos.concat();
                array.splice(values.todoId - 1, 1, data)
                this.setState({ todos: array })
              }
            })
          })
          .catch(err => {
            return err;
          })
      } else if (todoId === value.todoId && value.isCompleted === true) {
        fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ isCompleted: false })
        })
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.state.todos.map(values => {
              if (values.todoId === data.todoId) {
                const array = this.state.todos.concat();
                array.splice(values.todoId - 1, 1, data)
                this.setState({ todos: array })
              }
            })
          })
          .catch(err => {
            return err;
          })
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}
