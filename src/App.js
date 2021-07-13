import './App.scss';
import {Container, Row} from 'react-bootstrap';
import {useState} from "react";
import {useFetch} from "./hooks/useFetch";

function App() {
  const[endpoint,setEndpoint] = useState("character");
  const[data,loading,error] = useFetch(endpoint);
  console.log(data);

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
