import { useState } from "react";
// import './App.css'
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {
  const foo = (name) => {
    console.log("foo", name);
  };
  const foo2 = (name, name2) => {
    console.log(name, name2);
  };
  const foo3 = (ele) => {
    console.log("foo3", ele.target.value);
  };
  const finalfoo = (ele, firstname) => {
    console.log("ele", ele.target, "firstname", firstname);
  };
// these were events in react

// -States:
// -States are used to store data in react components.
// -useState is a hook that is used to create states in react.
// -useState returns an array of two elements.
// -The first element is the state itself and the second element is the function that is used to update the state.
// -useState takes one argument which is the initial value of the state.

// var heading = "hello";
// const changetext = () => {
//   heading = "hello world";
//   console.log(heading);
// }
  // this is wrong way to change the state

// -The state can be updated by calling the function that is returned by useState.
// -The state can not be updated directly.

// const [heading, setHeading] = useState("hello");

// const changetext = () => {
//   setHeading("hello world");
// }
// this is the right way to change the state

//how virtual dom works:
// -The virtual DOM is a copy of the actual DOM.
// -The virtual DOM is created by react.
// -The virtual DOM is created by using the actual DOM.
// -The virtual DOM is updated by react.
// -The virtual DOM is compared with the actual DOM.
// -The actual DOM is updated by react.
// -The actual DOM is updated only at the place where it is required.
// -The actual DOM is updated by using the virtual DOM.
// -The actual DOM is updated only once.

//how virtual dom will check if any change is made or not:
console.log("render");
// this will run only once

const [count, setCount] = useState(0);

const setCounter = (count) => {
  setCount(count + 1);
}

  return (
    <div>
      {/* <h1>{heading}</h1>
      <button onClick={
        () => {
          changetext();
        }
      }>
        Click here
      </button> */}
      <h1>{count}</h1>
      <button onClick={
        ()=>
        {
          setCounter(count);
        }
      }> Increment
      </button>

      {/* <Header /> */}
      {/* <h1>Main</h1> */}
      {/* <button onClick={foo}>click</button>  */}
      {/* this is props in react. now if we give attribute to the function it won't work. so we'll use callback function*/}
      <br />
      <br />
      <button
        onClick={() => {
          foo("hello");
        }}
      >
        click
      </button>

      <button
        onClick={() => {
          foo2("asghar", "ali");
        }}
      >
        name
      </button>

      {/* button with this/ele parameter */}
      <button
        onClick={(ele) => {
          foo3(ele);
        }}
      >
        click 3
      </button>

      <button onClick={(ele) => finalfoo(ele, "ali")}>click 4</button>
      <br />
      <br />
     

      {/* <Footer /> */}
    </div>
  );
}

export default App;
