import { useState, useRef } from "react";

export default function ControlledForm({formRef}) {

    // need to store the value of the input field in the state and need to initialize it with a default value
    const [username, setUsername] = useState("John Doe");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);
    const usernameInputRef = useRef();

    // need to handle the change event of the input field
    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onAgeChange = (e) => {
        setAge(e.target.value);
    }

    const onSubmitHandler = (e) => {
        // prevent the default behavior of the form if the button is of type submit
        e.preventDefault();

        console.log(username);
        console.log(password);
        console.log(age);

        resetFromHandler();
    }

    const resetFromHandler = () => {
        setUsername("");
        setPassword("");
        setAge(0);
    }


    return (
        <>
        <h1>Controlled Form</h1>
        <form ref={formRef}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    ref={usernameInputRef}
                    type="text" 
                    name="username"
                    id="username"
                    // passing value and onChange props makes the input controlled
                    value={username}
                    onChange={onUsernameChange}
                />
            </div>  
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    // passing value and onChange props makes the input controlled
                    value={password}
                    onChange={onPasswordChange}
                />
            </div> 
            <div>
                <label htmlFor="age">Age</label>
                <input 
                    type="number" 
                    name="age" 
                    id="age" 
                    // passing value and onChange props makes the input controlled
                    value={age}
                    onChange={onAgeChange}
                />
            </div> 
            {/* <button type="submit" onClick={onSubmitHandler}>Register</button>  -  if button is of type submit, the default behaviour needs to be prevented in the onSubmitHandler function*/}
            <button type="submit" onClick={onSubmitHandler}>Register</button>            
            <button type="button" onClick={resetFromHandler}>Reset</button>            
        </form>
        </>
    );
}