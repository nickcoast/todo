import React from "react"
import { v4 as uuidv4} from "uuid"
import Header from "./Header"
import TodosList from "./TodosList";
import inputTodo from "./InputTodo";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state =  {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  }
  handleClick(i) {

  }
  /*
  // works
  handleChange = (id) => {
    // console.log("clicked key:", id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }*/

  // doesn't work
  handleChange = (id) => {
    // console.log("clicked key:", id)
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    }))
  }

  delTodo = id => {
    console.log("deleted" , id);
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id != id;
        })
      ]
    })
  }

  addTodo = e => {
    console.log("Add a big todo")
    e.preventDefault()
    const nextId = uuidv4()
    this.setState(prevState => ({
      todos: [
        ...prevState.todos, ({id: nextId, title: "Fuuug", completed: true})
      ]
    }))
  }

  getNextId() {
    return Math.max(...this.state.todos.map(o => o.id)) + 1
  }

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    })
  }


  addTodoItem = title => {
    //const max = Math.max(...this.state.todos.map(o => o.id))
    const nextId = uuidv4()
    const newTodo = {
      id: nextId,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className={"container"}>
        <div className={"inner"}>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          delTodoProps={this.delTodo}
          setUpdate={this.setUpdate}
        />
        <button onClick={this.addTodo}>Add</button>
        </div>
      </div>
    )
  }
}
export default TodoContainer