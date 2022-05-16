import './App.css';
import Hello from './components/Hello'
import Counter from './components/Counter'
import Station from './components/Station'

import {useEffect, useState} from 'react';

function App() {

  const [stations, setStations] = useState([]);

  useEffect(() => {
    async function getStations() {
      const response = await fetch('https://api.citybik.es/v2/networks/velo-antwerpen');
      const json = await response.json();
      setStations(json.network.stations);
    }

    getStations();
  }, []);



  let names = ["Niels", "Lena", "Julie", "Carolien"];

  let nameElements = [];
  names.forEach((name) => {
    nameElements.push(<Hello name={name} key={name}/>);
  })



  return (
    <div className="App">
      {nameElements}
      <Counter/>
      {stations.map(station => (<Station data={station} key={station.id}/>))}
    </div>
  );
}

export default App;
