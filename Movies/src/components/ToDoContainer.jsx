import ToDoItem from './ToDoItem';

export default function ToDoContainer({toDoItems}) {

    return (
        <>
            <h1>To Do List</h1>
            <div style={{margin: '20px', display: 'inline-flex', flexDirection: 'row'}}>
                {toDoItems.map(item => <ToDoItem key={item._id} {...item}/>)}
            </div>
        </> 
    )
}