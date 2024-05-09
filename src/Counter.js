import { useState } from "react";
import "./styles.css";

const Counter = () => {
    const[count,setCount]=useState(0);
    const Increment = () => setCount(count+1);
    const Decrement = () => setCount(count-1);
    const Reset = () => setCount(0);
  return (
    <>
    <div className="container">
        <div className="number"> {count} </div>
    </div>

    <section className="btns-container">
   
      <button onClick={Decrement} className="increment">-</button>
      <button onClick={Reset} className="increment">Reset</button> 
      <button onClick={Increment} className="increment">+</button> 
        
    
    </section>
                         
    </>
   
  );
}

export default Counter;