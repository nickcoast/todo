import React from "react"
import TodoItem from "./TodoItem"
class TodosList extends  React.Component {
  render () {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            delTodoProps={this.props.delTodoProps}
            setUpdate={this.props.setUpdate}
          />
        ))}
      </div>
    )
  }
}
export default TodosList