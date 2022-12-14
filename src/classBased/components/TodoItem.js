import React from "react"
import styles from "./TodoItem.module.css"
class TodoItem extends React.Component {
    state = {
      editing: false,
    }
    handleEditing = (e) => {
      this.setState({
        editing: true,
      })
    }
    handleUpdatedDone = (e) => {
      //this.props.setUpdate(e.target.value, this.props.todo.id)
      if(e.key === 'Enter') {
        this.setState({
          editing: false,
        })
      }
    }
    componentWillUnmount() {
      console.log("Cleaning up...")
    }

  render() {
      const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
      let viewMode = {}
      let editMode = {}
      if(this.state.editing) {
        viewMode.display = "none"
      } else {
        editMode.display = "none"
      }

      const { completed, id, title } = this.props.todo;
        return (
            <li className={styles.item}>
              <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input
                  type={"checkbox"}
                  className={styles['checkbox']}
                  checked={completed}
                  onChange={() => this.props.handleChangeProps(id)} // id? or key?
                />
                <button onClick={() => this.props.delTodoProps(id)}>
                  Delete
                </button>
                <span style={completed ? completedStyle: null}>
                  {title}
                  </span>
              </div>
              <input
                type={"text"}
                style={editMode}
                className={styles.textInput}
                onChange={e => {
                  this.props.setUpdate(e.target.value, id )

                }}
                onKeyDown={this.handleUpdatedDone}
                value={title}
              />
            </li>
        )
    }
}
export default TodoItem