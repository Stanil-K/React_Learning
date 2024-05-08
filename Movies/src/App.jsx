import MovieList from './components/MovieList'
import movies from './assets/movies'
import Timer from './components/Timer'
import Counter from './components/Counter'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import SwapiCharacters from './components/SwapiCharacters'
import SwapiCharacterDetails from './components/SwapiCharacterDetails'
import NotFound from './components/NotFound'
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import UncontrolledForm from './components/UncontrolledForm'
import ControlledForm from './components/ControlledForm'
import HomeToDo from './components/HomeToDo'
import ControlledFormImproved from './components/ControlledFormImproved'

function App() {

  return (
    <>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/movies" element={<MovieList movies={movies} />} />

              <Route path='/timer' element={<Timer />}>
                {/* Nested routes, good for modals */}
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />           
              </Route>
              
              <Route path='/counter' element={<Counter />} />  
              <Route path='/swapiCharacters' element={<SwapiCharacters />} />
              <Route path='/swapiCharacters/:id' element={<SwapiCharacterDetails />} />    
              <Route path='*' element={<NotFound />} />    
              <Route path='/uncontrolledForm' element={<UncontrolledForm />} />
              <Route path='/controlledForm' element={<ControlledForm />} />
              <Route path='/controlledFormImproved' element={<ControlledFormImproved />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/homeToDo' element={<HomeToDo />} />
            </Routes>

    </>
 
  )
}

export default App
 