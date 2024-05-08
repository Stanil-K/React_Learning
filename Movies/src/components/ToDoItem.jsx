import { Card,Button } from "react-bootstrap";
import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import { useState } from "react";

export default function ToDoItem() {
    const {title, isFinished, _id} = useContext(ToDoContext);
    const [taskFinished, setTaskFinished] = useState(isFinished);

    const toggleFinished = async () => {
        const newTaskFinished = !taskFinished;
        setTaskFinished(newTaskFinished);
   
        const baseUrl = 'http://localhost:3030/jsonstore/todos/'

        try {
            const response = await fetch(baseUrl + _id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    isFinished: newTaskFinished,
                    _id: _id
                }),
            });

            if (!response.ok) {
                console.error('Failed to update task');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return(
        <Card style={{width: '18rem', margin: '20px'}} key={_id}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>state: {taskFinished ? 'Done' : 'In Progress'}</Card.Text>
                <Card.Text>id: {_id}</Card.Text>
                <Button variant="primary" onClick={toggleFinished}>Change state</Button>
            </Card.Body>
        </Card>
    )
}