import{memo, useState} from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Form } from "react-bootstrap";

const Search = ({ findCharacters })=>{
    const [character, setCharacter] = useState("");
    const getCharacters = (e)=>{
        e.preventDefault();
        findCharacters(character);
    }

 return(
    <Form onClick={getCharacters} className="search__bar">
        <InputGroup>
            <FormControl 
            placeholder="Ingrese un personaje" 
            onChange={(e) =>setCharacter(e.target.value)} 
            value={character} 
            name="character" ></FormControl>
        </InputGroup>
    </Form>
 );
}

//documento el componente
Search.propTypes ={
    findCharacters: PropTypes.func.isRequired,
}

// nno quiero que se vuelva a redibujar el buscardor

export default memo(Search);
