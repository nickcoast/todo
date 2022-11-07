import React, {useState, useEffect} from "react"
import Header from "./Header"
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4} from "uuid"

const TodoContainer = () => {
  const [stuff, setStuff] = useState({
    todos: []
  })

  // mount
  useEffect(() => {
    console.log("Congrats! Yuo have been hacked!")
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if( loadedTodos ) {
      setStuff(prevState => ({
        ...prevState,
        todos: [...prevState.todos, ...loadedTodos]
      }))
    }
  }, [])
  /*function getInitialTodos() {
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }*/

  // update
  useEffect(() => {
    const temp = JSON.stringify(stuff.todos)
    localStorage.setItem("todos",temp)
  }, [stuff.todos])

  const handleChange = (id) => {
    setStuff(prevState => ({ // return???
      ...prevState,
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
  const delTodo = id => {
    console.log("deleted" , id);
    setStuff(prevState => {
      return {
        ...prevState,
          todos:
          [
            ...prevState.todos.filter(todo => {
              return todo.id != id;
            })
          ]
      }
    })
  }

  const addTodo = e => {
    console.log("Add a big todo")
    e.preventDefault()
    const nextId = uuidv4()
    setStuff(prevState => ({
      ...prevState,
      todos: [
        ...prevState.todos, ({id: nextId, title: "Fuuug", completed: true})
      ]
    }))
  }
  const setUpdate = (updatedTitle, id) => {
    setStuff( prevState =>  ({
      ...prevState,
      todos: prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    }))
  }


  const addTodoItem = title => {
    //const max = Math.max(...this.state.todos.map(o => o.id))
    const nextId = uuidv4()
    const newTodo = {
      id: nextId,
      title: title,
      completed: false
    }
    setStuff(prevState => ({
      ...prevState,
      todos: [...prevState.todos, newTodo]
    }))
  }


  return (
    <div className={"container"}>
      <div className={"inner"}>
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={stuff.todos}
          handleChangeProps={handleChange}
          delTodoProps={delTodo}
          setUpdate={setUpdate}
        />
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  )


}
export default TodoContainer