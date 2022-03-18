import React ,{useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {useGetJokeByIdQuery} from './features/mdata/api-slice'


function App() {
  const [category,setCategory] = useState('dev')

  const {data, status}  = useGetJokeByIdQuery(category)
  function handleChange(e:any){
    setCategory(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <input type="textbox" value={category} onChange ={handleChange}/>
        <p>{status}</p>
        <p>{data?.value}</p>
      </header>
    </div>
  );
}

export default App;
