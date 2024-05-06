import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function SwapiCharacterItem(
    {name,hair_color,eye_color,birth_year,gender,id}
) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <ul>
                <li>hair_color: {hair_color}</li>
                <li>eye_color: {eye_color}</li>
                <li>birth_year: {birth_year}</li>
                <li>gender: {gender}</li>
            </ul>
        </Card.Text>
        <Button as={Link} to={`/swapiCharacters/${id}`} >Details</Button>
      </Card.Body>
    </Card>
    );
}