import React from "react"
import ReactDOM from "react-dom"
import Todocontainer from "./components/TodoContainer"

// Stylesheet
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <Todocontainer />
  </React.StrictMode>,
  document.getElementById("root")
)