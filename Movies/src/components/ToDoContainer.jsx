import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';
import { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';

export default function ToDoContainer() {

    const { toDoItems } = useContext(ToDoContext);

    //each "To Do Item" needs to be wrapped in a ToDoContext.Provider, if not, the ToDoItem component will not be able to access the context and will not render the data(title, isFinished, _id)

    return (
        <>
            <h1>To Do List</h1>     
            <AddToDo/>
            
            <div style={{margin: '20px', display: 'inline-flex', flexDirection: 'row'}}>
            {toDoItems.map(item => (
                    <ToDoContext.Provider key={item._id} value={item}>
                        <ToDoItem key={item._id}/>
                    </ToDoContext.Provider>
                ))}
            </div>           
        </> 
    )
}