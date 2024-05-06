import { useEffect, useState } from "react";
import SwapiCharacterItem from "./SwapiCharacterItem";

const base_url = 'https://swapi.dev/api';

export default function SwapiCharacters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        //create abort controller to stop the fetch when the component is unmounted
        const abortController = new AbortController();
        //add signal to the fetch to stop it when the component is unmounted
        fetch(`${base_url}/people`, { signal: abortController.signal })
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
            });
            //stop the fetch when the component is unmounted
            return () => abortController.abort();
    }, []);

    return (
        <>
            {characters.map((character,index) => <SwapiCharacterItem key={character.name} id={index + 1} {...character}/> )}
        </>
    );
}