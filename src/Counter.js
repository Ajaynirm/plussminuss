import { useState } from "react";
import "./styles.css";

const Counter = () => {
    const[ten,setTen]=useState(0);
    const[hundred,setHundred]=useState(0);
    const[thousand,setThousand]=useState(0);
    const[count,setCount]=useState(0);
    const [mes,setMes]=useState("you are Goood player");
   
    const Increment = () => {
      setCount(prev => {
        const newCount=prev+1;
        
       if (newCount % 1000 === 0) {
          alert(`You reached a counter of ${newCount}`);
          setThousand(prev => prev+1);
          setHundred(prev => prev+1);
          setTen(prev => prev+1);
          setMes(prev => "Outstanding you're pro!...");

       } else if (newCount % 100 === 0) {
          alert(`You reached a counter of ${newCount}`);
          setHundred(prev => prev+1);
          setTen(prev => prev+1);
          setMes(prev => "Awesome ! ...");
       } else if (newCount % 10 === 0) {
           setTen(prev => prev+1);
           setMes(prev => "Good keep it up! ...");
           
      }
       
        return newCount;

      });
    } 
    const Decrement = () => {
      setCount(prev => {
        const newCount=prev-1;
        if (newCount % 1000 === 0) {
          alert(`You reached a counter of ${newCount}`);
          setThousand(prev => prev-1);
          setHundred(prev => prev-1);
          setMes(prev => "Outstanding you're pro!...");
       } else if (newCount % 100 === 0) {
          alert(`You reached a counter of ${newCount}`);
          setHundred(prev => prev-1);
          setTen(prev => prev-1);
          setMes(prev => "Awesome ! ...");
       } else if (newCount % 10 === 0) {
           setTen(prev => prev-1);
           setMes(prev => "Good keep it up! ...");
      }
        return newCount;
      });
    }
    const Reset = () => {
      setCount(0);
      setTen(0);
      setHundred(0);
      setThousand(0);
      setMes("Hey! what the hell are you doing...");
    }
    const cheat = () => {
      setCount(count+5);
      setMes("You are a Big cheaterrrr");
    }
   
  return (
    <>
    <div className="container">
        <div className="title">Tens________   :{ten}</div>
        <div className="title">Hundreds____  :{hundred}</div>
        <div className="title">Thousands___ :{thousand}</div>
        <div className="number"> {count} </div>
    </div>

    <section className="btns-container">
   
      <button onClick={Decrement} className="increment">-</button>
      <button onClick={Reset} className="reset">Reset</button> 
      <button onClick={Increment} className="increment">+</button> 
      <button onClick={cheat} className="cheat ">cheat</button>
        
    
    </section>
    <section className="message">
      <h2>{mes}</h2>
    </section>
                         
    </>
   
  );
}

export default Counter;