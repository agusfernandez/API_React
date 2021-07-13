import { Col,Row, Card, Button } from "react-bootstrap";
import PropTypes from 'react';

//le paso characters
const Characters =({Characters})=>{
    return(
        <Row>
            <Col lg={3} md={4} sm={12}>
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
        </Row>
    );
}

Characters.PropTypes ={
    characters:PropTypes.arrayOf({
        
    })
}


export default Characters;