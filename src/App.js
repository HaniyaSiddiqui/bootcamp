import react,{useState} from 'react';
import {Message} from './Message.js';
import './App.css';

export default function App() {

  let [count,setCount] = useState(1);
  let[isMorning, setMorning] =useState(true)
  return (
    <div className={`box ${ isMorning ? 'dayLight' : '' }`}>
      <h1> Day Time = { isMorning ? 'Morning' : 'Night' }</h1>
      <Message counter={count} />
      {/* <h1> The value of count is {count}</h1> */}
      <button onClick={
        () => setCount(++count)
      } > Update Counter</button>
   
      <button onClick={
        () => setMorning(!isMorning)
      }> Update Day</button>

    </div>
  );
}