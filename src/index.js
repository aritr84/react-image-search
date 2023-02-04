// importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// importing App component
import App from "./App"

// get root
const el = document.getElementById('root')

// create Root
const root = ReactDOM.createRoot(el)
// rendering App
root.render(<App/>)