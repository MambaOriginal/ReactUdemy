import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './counterApp'
import { FirstApp } from './FirstApp'
import { HelloWorldApp } from './helloWorldApp'
import './style.css'
//Elemento que busca la div principal para renderizas todo los componentes JSX y pintar la pagina
ReactDOM.createRoot(document.getElementById('root')).render(
  //Esto me define en que modo va a trabajar react en este caso es con modo estricto
  <React.StrictMode>
    <FirstApp title='Hola, soy vegeta2' />
    {/* <CounterApp value={ 40 } /> */}
  </React.StrictMode>
)