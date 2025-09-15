import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'

//everything branches from the root that's why it's called like that (components, lists, buttons, etc.
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App/> {/*since app is where we'll put all of our recipe info that's what we want to render*/}
    </React.StrictMode>
)