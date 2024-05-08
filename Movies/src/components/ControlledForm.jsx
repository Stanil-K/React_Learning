import { useState} from "react";


export default function ControlledForm() {
    // need to store the value of the input field in the state and need to initialize it with a default value
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const usernameChangeHandler = (e) => {
    // need to handle the change event of the input field
        setUsernameValue(e.target.value);
    };

    const resetFormHandler = () => {
        setUsernameValue('');
        setPasswordValue('');
        setAgeValue('');
    };

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setAgeValue(Number(e.target.value));
    };

    const submitHandler = () => {
        // prevent the default behavior of the form if the button is of type submit
        console.log(usernameValue);
        console.log(passwordValue);
        console.log(ageValue);
        resetFormHandler();
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        // passing "value" and "onChange" props makes the input controlled
                        value={usernameValue}
                        onChange={usernameChangeHandler}
                        onBlur={() => console.log('onBlur')}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        // passing value and onChange props makes the input controlled
                        value={passwordValue}
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        // passing value and onChange props makes the input controlled
                        value={ageValue}
                        onChange={ageChangeHandler}
                    />
                </div>
                <div>
                    {/* <button type="submit" onClick={onSubmitHandler}>Register</button>  -  if button is of type submit, the default behaviour needs to be prevented in the onSubmitHandler function*/}
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
}
