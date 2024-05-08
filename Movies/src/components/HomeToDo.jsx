import ToDoContainer from './ToDoContainer'
import { useState, useEffect } from 'react'

const baseUrl = 'http://localhost:3030/jsonstore/'

export default function HomeToDo (){

      const [toDoItems, setToDoItems] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}todos`)
    .then(res => {return res.json()})
    .then(data => {setToDoItems(Object.values(data))})
  },[])

return(
    <>
        <h1>React To Do Items</h1>
        <ToDoContainer toDoItems={toDoItems}/>
    </> 
);

}
