import { ToDoContext } from '../contexts/ToDoContext'
import ToDoContainer from './ToDoContainer'
import { useState, useEffect } from 'react'

const baseUrl = 'http://localhost:3030/jsonstore/todos'

export default function HomeToDo (){

      const [toDoItems, setToDoItems] = useState([])

  useEffect(() => {
    fetch(baseUrl)
    .then(res => {return res.json()})
    .then(data => {setToDoItems(Object.values(data))})
    .catch(err => console.error(err))
  },[])

  const context = {toDoItems}

  // toDoItems is the json file with its the objects and each object's properties (in this case - title, isFinished, _id) that are passed to the ToDoContext.Provider in the ToDoContainer component

return(
    <>
        <ToDoContext.Provider value={context}>
            <h1>React To Do Items</h1>            
            <ToDoContainer/>
        </ToDoContext.Provider>

    </> 
);

}
