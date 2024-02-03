import { useState } from "react";
// import './App.css'
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function App() {

// let [arr, setArr] = useState({"asghar "});

// const updateArr = () => {
//   let name = prompt("enter new name: ");
//   arr.push(name);
// setArr({...arr,});
// -states topic was also discussed in the previous class and done here 

// -Props: 
// -Props are used to pass data from one component to another component.
// -Props are read-only and cannot be modified from the child component.
// -Props are used to send data from parent to child component.





 
  return (
    <div>
      
      {/* <h1>Hello</h1>
      <h1>Scores: {arr} </h1>
    
      <button onClick={
        () =>
        {
          updateArr();
        }
      }>change name</button> */}
      <Header />
      <br />
      <br />
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
