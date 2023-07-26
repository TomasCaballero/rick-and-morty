import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [listadoPersonajes, setListadoPersonajes] = useState([])

  const obtenerListadoPorNumeroDePagina = async() =>{
    const peticion = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
    const data = await peticion.json();
    setListadoPersonajes(data.results);
  }

  useEffect(()=>{
    obtenerListadoPorNumeroDePagina();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber])

  return (
    <div className='layout'>
      <Header pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      <Main pageNumber={pageNumber} listadoPersonajes={listadoPersonajes}/>
      <Footer/>
    </div>
  )
}

export default App
