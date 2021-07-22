import {Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import Character from "../Character/Character";
//le paso characters
const Characters =({characters})=>{
    return(
        <Row>
            {characters?.length>0 && characters.map((character)=><Character {...character}/>)}
        </Row>
    );
};

// defino las proptypes de characterss
Characters.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            created: PropTypes.string,
            gender:PropTypes.string,
            id:PropTypes.number,
            name: PropTypes.string,
            species:PropTypes.string,
            status: PropTypes.string,
        }).isRequired
        
    ),
};


export default Characters;