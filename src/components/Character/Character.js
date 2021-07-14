import {Col, Card, Button} from "react-bootstrap";
import PropTypes from 'prop-types';

// {character} nos devuelve un objeto
const Character = ({id, name, image, status, species, created}) =>{
 return(
    <Col lg={3} md={4} sm={12} className="card__separation" key={id}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Status: {status}
        </Card.Text>
        <Card.Text>
            Especie: {species}
        </Card.Text>
        <Card.Text>
            Creado: {created}
        </Card.Text>
        <Button variant="primary">Go {id}</Button>
    </Card.Body>
  </Card>
  </Col>

 );
}

Character.propTypes = {
    character:PropTypes.shape({
            created: PropTypes.string,
            gender:PropTypes.string,
            id:PropTypes.number,
            name: PropTypes.string,
            species:PropTypes.string,
            status: PropTypes.string,
        }).isRequired,
        
};

export default Character;