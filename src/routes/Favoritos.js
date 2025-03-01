import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { deleteFavoritos, getFavoritos } from '../svc/favoritos'
import livroImg from '../imagens/livro.png'
import { enqueueSnackbar } from 'notistack'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #520000  35%, #ff0000  165%);
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
`
const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([])

  const fetchFavoritos = async () => {
    try {
      const favoritosDaApi = await getFavoritos()
      setFavoritos(favoritosDaApi)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteFavorito = async (id) => {
    try {
      await deleteFavoritos(id)
      enqueueSnackbar(`Livro ${id} deletado com sucesso!`, { variant: 'success' })
      await fetchFavoritos()
    } catch (error) {
      enqueueSnackbar(`Erro ao deletar!`, { variant: 'error' })
    }
  }


  useEffect(() => {
    fetchFavoritos()
  }, []);

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.map(favorito => (
              <Resultado onClick={() => deleteFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg} alt='imagem' />
              </Resultado>
            ))
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos