import MovieList from './components/MovieList'
import movies from './assets/movies'
import Timer from './components/Timer'
import Counter from './components/Counter'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SwapiCharacters from './components/SwapiCharacters'
import SwapiCharacterDetails from './components/SwapiCharacterDetails'
import NotFound from './components/NotFound'
import About from "./components/About";
import Contacts from "./components/Contacts";
import UncontrolledForm from './components/UncontrolledForm'
import ControlledForm from './components/ControlledForm'
import ControlledFormImproved from './components/ControlledFormImproved'
import { useRef } from 'react'

function App() {

  const formRef = useRef();

  return (
    <>
          <Navigation />
           <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/movies" element={<MovieList movies={movies} />} />

            <Route path='/timer/*' element={<Timer />}>
              // Nested routes, good for modals
                  <Route path="about" element={<About />} />
                  <Route path="contacts" element={<Contacts />} />           
            </Route>

            <Route path='/counter' element={<Counter />} />  
            <Route path='/swapiCharacters' element={<SwapiCharacters />} />
            <Route path='/swapiCharacters/:id' element={<SwapiCharacterDetails />} />    
            <Route path='*' element={<NotFound />} />    
            <Route path='/uncontrolledForm' element={<UncontrolledForm />} />
            {/* <Route path='/controlledForm' element={<ControlledForm />} /> */}
            <Route path='/controlledFormImproved' element={<ControlledFormImproved />} />
           </Routes>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           <ControlledForm  formRef = {formRef}/>
           <button type="button" onClick={() => formRef.current.requestSubmit()}>Submit</button>
    </>
 
  )
}

export default App
 