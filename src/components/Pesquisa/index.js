import Input from "../Input"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { getLivros } from "../../svc/livros"
import { postFavoritos } from "../../svc/favoritos"
import { enqueueSnackbar } from "notistack"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #520000 35%, #ff0000 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 100%;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [livrosPesquisados, setlivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, [])

    const fetchLivros = async () => {
        const livrosDaApi = await getLivros()
        setLivros(livrosDaApi)
    }

    const insertFavorito = async (id) => {
        try {
            await postFavoritos(id)
            enqueueSnackbar(`Livro ${id} inserido com sucesso!`, { variant: 'success' })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua proxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(f => f.nome.includes(textoDigitado))
                    setlivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map(livro => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa