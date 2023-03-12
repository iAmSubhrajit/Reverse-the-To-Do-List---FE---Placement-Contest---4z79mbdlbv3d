import React, { useEffect, useState } from 'react'
import '../styles/App.css';

function ToDo({ id, createdAt }) {
  const [inputValue, setinputValue] = useState('')
  return (<tr>
    <td>
      <p>{id}</p>
    </td>
    <td>
      <input onChange={(e) => setinputValue(e.target.value)} value={inputValue} />
    </td>
    <td>
      <p>{createdAt}</p>
    </td>
  </tr>)
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  return (
    <div id="main">
      <button onClick={() => setTodos([...todos].reverse())}>Reverse</button>
      <table>
        <tbody>
          {todos.map((el) => (
            <ToDo key={el.id} id={el.id} createdAt={el.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  )
}


export default App;
