import React ,{useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Prisoner from './features/prisoner/prisoner'
import './App.css';
import {useGetJokeByIdQuery, useAddDataMutation,useDeleteJokeMutation} from './features/mdata/api-slice'


function App() {
  const [category,setCategory] = useState('dev')

  const {data, status}  = useGetJokeByIdQuery(category)
  const [addData] = useAddDataMutation();
  const [deleteJoke] = useDeleteJokeMutation();

  function handleChange(e:any){
    setCategory(e.target.value)
    addData({id:'1',value:'yes its data'})
    deleteJoke(2)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        
        <input type="textbox" value={category} onChange ={handleChange}/>
        <p>{status}</p>
        <p>{data?.value}</p>
        <Prisoner />
      </header>
      
    </div>
  );
}

export default App;
