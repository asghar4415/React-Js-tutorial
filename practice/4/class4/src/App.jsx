import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

function App() {

  // -props dealing:
//props are used to pass data from parent to child component in react and they are read-only. 
//They help you to maintain your application state.S


// input field:
const getvalue = ()=>
{
  console.log(userName)

}

const [userName, setUserName] = useState("")

// const getchanged = (e)=>
// {
//   console.log("get changed")
//   console.log(e.target.value)

// }




var n= 0;
  return (
    <>
    {/* <Header mynum={n} num2={340} />
     <h1>main </h1>
      <Footer footnum={679}/> */}

      <input type="text" onChange={(e) =>
      {
        setUserName(e.target.value)
      }}/>
      <button onClick={getvalue}>Get value</button>

      <h2>Hello {userName}</h2>
    </>
  )
}

export default App
