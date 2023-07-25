import React, { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [buscar, setBuscar] = useState("");
  const API_KEY = "RGAPI-2d8144d6-b37c-45b5-ba9d-d17193dda81c"
  const [datosJugador, setDatosJugador] = useState({})


  function buscarJugador(event) {
    var callAPI = "https://la1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + buscar + "?api_key=" + API_KEY

    axios.get(callAPI).then(function (response) {
      setDatosJugador(response.data)
      
    }).catch(function (err) {
      console.log(err)    
    })
  }
  console.log(datosJugador)


  return(
    <>
      <div>
        <h1>Perfil</h1>
        <input type='Text' onChange={e => setBuscar(e.target.value)}></input>
        <button onClick={e => buscarJugador(e)}>Buscar</button>
        <div>
          {JSON.stringify(datosJugador) != "{}" ? 
          <><p>{datosJugador.name}</p>
          <img width="100" height="100" src={'http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/' + datosJugador.profileIconId + ".png"}></img></> 
          : 
          <><p>No existe el jugador</p></>
          }
        </div>
      </div>
      
    </>
  )
}

export default App
