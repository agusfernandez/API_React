import './App.scss';
import {Container, Row} from 'react-bootstrap';
import {useState} from "react";
import {useFetch} from "./hooks/useFetch";
import Characters from './components/Characters/Characters';
import Loading from './components/general/Loading';
import Search from './components/Search/Search';

function App() {
  const[endpoint,setEndpoint] = useState("character");
  const{data,loading,error} = useFetch(endpoint);
  const{results: characters, info} =data;
  //buscar por el character
  const findCharacters = (character) => {
    setEndpoint(`character?name=${character}`);
  };

  if(loading) return <Loading/>;
  if (error) return <h4>hay un error</h4>
  return (
      <Container className="App">
        <Search findCharacters={findCharacters}/>
        <Characters characters={characters}/>
      </Container>
  );
}

export default App;
