import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'


function App() {

  //react hooks: React hooks are functions that let you use state and other React features without writing a class.
  //useState: useState is a Hook that lets you add React state to function components.
  
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(true);

  // useEffect (() => {
  //   console.log('first time render')
  // }, [])
  //useEffect: useEffect is a hook that lets you perform side effects in function components. the first argument is a function that will be called after the render is committed to the screen. The second argument is an array of dependencies. If any of the dependencies change, the function will be called again.


//mounting any component
useEffect(() => {
  console.log('This will run after every render')
}
, [count])


// updating toggle
useEffect(() => {
  console.log('Toggle updated')
}
, [toggle])

  return (
    <>
    <Header />
    <button >hide</button>
    <button>show</button>
     <h1>React hooks</h1>
     <h1 onClick={
        () => {
          setCount(++count)
        }
      } >Counter: {count}</h1>
      <h1 onClick={
        () => {
          setToggle(!toggle)
        }
      }>Toggle</h1>
    </>
  )
}

export default App
