import { useState } from 'react';


// if the form is big and has many fields, it is better to store the keys in an object
// const FormKeys = {
//     username: 'username',
//     password: 'password',
//     age: 'age'
// }

const formInitialState = {
    username: 'John Doe',
    password: '',
    age: 0,
    gender: 'm',
    swimming: false,
    shopping: false,
    running: false
}

export default function ControlledFormImproved() {

    // const [formValues, setFormValues] = useState({
    //      need to store the value of the input field in the state and need to initialize it with a default value
    //      [FormKeys.username]: 'John Doe',
    //      [FormKeys.password]: '',
    //      [FormKeys.age]: 0
    // });

const [formValues, setFormValues] = useState(formInitialState);


const changeHandler = (e) => {
     let value = '';

        switch(e.target.type) {
            case 'number':
                value = parseInt(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        }

    setFormValues(state => ({
        ...state,
        [e.target.name]:value
    }));
}

const onSubmitHandler = (e) => {

    console.log(formValues);
}

const resetFromHandler = () => {
    setFormValues(formInitialState);
}



return (
    <>
    <h1>Improved Controlled Form</h1>
    <form>
        <div>
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                // Form keys can be user for big forms
                // name={FormKeys.username}
                name='username'
                id="username"
                // passing value and onChange props makes the input controlled
                value={formValues.username}
                onChange={changeHandler}
            />
        </div>  
        <div>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                // Form keys can be user for big forms
                // name={FormKeys.password}
                name='password' 
                password='password'
                id="password"
                // passing value and onChange props makes the input controlled
                value={formValues.password}
                onChange={changeHandler}
            />
        </div> 
        <div>
            <label htmlFor="age">Age</label>
            <input 
                type="number" 
                // Form keys can be user for big forms
                // name={FormKeys.age} 
                name='age'
                id="age" 
                // passing value and onChange props makes the input controlled
                value={formValues.age}
                onChange={changeHandler}
            />
        </div> 
        <div>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                <option value="f">F</option>
                <option value="m">M</option>
            </select>
        </div>

        <div>
            <h3>Hobbies</h3>

            <label htmlFor="swimming">Swimming</label>
            <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler}></input>

            <label htmlFor="shopping">Shopping</label>
            <input type="checkbox" name="shopping" id="shopping" checked={formValues.shopping} onChange={changeHandler}></input>

            <label htmlFor="running">Running</label>
            <input type="checkbox" name="running" id="running" checked={formValues.running} onChange={changeHandler}></input>
        </div>

        <div>
            {/* <button type="submit" onClick={onSubmitHandler}>Register</button>  -  if button is of type submit, the default behaviour needs to be prevented in the onSubmitHandler function*/}
            <button type="button" onClick={onSubmitHandler}>Register</button>
            <button type="button" onClick={resetFromHandler}>Reset</button>
        </div>  
    </form>
    </>
);

}