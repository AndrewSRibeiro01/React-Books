import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getFavoritos } from '../svc/favoritos'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #520000  35%, #ff0000  165%);
`

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([])

  const fetchFavoritos = async () => {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
  }

  useEffect(() => {
    fetchFavoritos()
  }, []);

  return (
    <AppContainer>
      {favoritos.map(m => (
        <h1>{m.nome}</h1>
      ))}
      vkldfhvjldfbhjkvhdfjvbhjkdflbhjk
    </AppContainer>

  )
}

export default Favoritos