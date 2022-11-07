import React from "react"
import ReactDOM from "react-dom"
import Todocontainer from "./functionBased/components/TodoContainer"

// Stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Todocontainer />
  </React.StrictMode>,
  document.getElementById("root")
)