import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Opcoes = styled.ul`
  display: flex;
`

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-items: center;
  text-align: center;
  min-width: 120;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']


const OpcoesHeader = () => {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcao >
            <p>{texto}</p>
          </Opcao>
        </Link>
      ))
      }
    </Opcoes >
  )
}

export default OpcoesHeader