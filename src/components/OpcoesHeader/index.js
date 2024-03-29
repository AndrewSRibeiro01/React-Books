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


function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Opcao><p>{texto}</p></Opcao>
      ))}
    </Opcoes>
  )
}

export default OpcoesHeader