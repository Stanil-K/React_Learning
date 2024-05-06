import { Routes, Route } from 'react-router-dom'

export default function Home() {

    return(
        <>
           <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/about" element={<About />} />
                <Route path='/timer' element={<Timer />} />
                <Route path='/counter' element={<Counter />} />      
           </Routes>
    </>
    );
}