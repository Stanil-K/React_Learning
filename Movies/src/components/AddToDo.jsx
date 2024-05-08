import { Button, Form } from "react-bootstrap"
import { useState } from "react"

export default function AddToDo(){

    const [formData, setFormData] = useState();
    const baseUrl = 'http://localhost:3030/jsonstore/todos';

    const onChangeHandler = (e) => {
        setFormData(e.target.value);
    }

    const onSubmitHandler = () => {
        const response = fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: formData})
        })

        const data = response.json();
        setFormData( state => [...state, data]);
    }


    return(
        <>
            <Form style={{width: '350px'}} onSubmit={onSubmitHandler}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" name="title" value={formData} onChange={onChangeHandler}/>
                </Form.Group>
                <Button type="submit" variant="primary">Add</Button>
            </Form>
        </>
    )
}