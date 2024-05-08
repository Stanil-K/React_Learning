import { Card,Button } from "react-bootstrap";

export default function ToDoItem({id, title, isFinished}) {


    return(
        <Card style={{width: '18rem', margin: '20px'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>state: {isFinished ? 'Done' : 'In Progress'}</Card.Text>
                <Button variant="primary">Change state</Button>
            </Card.Body>
        </Card>
    )
}