import { useState} from "react";
import { Link,Outlet } from "react-router-dom";


export default function Timer() {
let [time, setTime] = useState(0)

setTimeout(() => {
   setTime(time + 1);
}
, 1000)


return (
    <>
        <nav>
            <Link to="about">About</Link> <br/>
            <Link to="contacts"> Contacts</Link>
        </nav>
        <div>
            <h1>Timer</h1>
            <p>Time elapsed: {time}</p>
        </div>

        <Outlet />
    </> 
); 
}
