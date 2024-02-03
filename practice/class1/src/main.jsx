// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import react from 'react'
import reactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
reactDOM.createRoot(root).render(
  <App />
)
//we can only keep one child in the root element so we can wrap all the elements in a div
//we can also use react.fragment to wrap all the elements in a div  
// reactDOM.createRoot(root).render(
//   <react.Fragment>
//     <h1>hello</h1>
//     <h2>hello</h2>
//   </react.Fragment>
// )
 
//we can also use <> </> to wrap all the elements in a div
// reactDOM.createRoot(root).render(
//   <>
//     <h1>hello</h1>
//     <h2>hello</h2>
//   </>
// )




