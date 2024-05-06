import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function SwapiCharacterDetails() {
   
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.')
                }
                return response.json();
            
            })
            .then(setCharacter)
            .catch((error) => navigate('/swapiCharacters'))
    }, [id]);

  
    return (
        <>  
            <h1>{character.name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, doloremque quos ut accusantium vero ea voluptas facere eum quasi ad cupiditate inventore, exercitationem sed? Repudiandae quos exercitationem perferendis ducimus architecto!</p>
        </>
    )
}