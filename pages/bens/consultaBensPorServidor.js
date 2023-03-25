import listaBrutaUfca from '../../src/assets/json/bens_moveis.json'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function ConsultaBensPorServidor() {
    const {data: session} = useSession()
    const [servidor, setServidor] = useState('')

    const bensFiltrados = listaBrutaUfca.map(
        (bem, i) =>
            <p key={i}>{bem.responsavel === servidor ? `Tombo ${bem.tombamento} - Valor atual: ${bem.["valor atual"]} - ${bem.denominacao}` : null}</p>
    )

    if (session) {
        return (
            <>
                <label>
                    <h2>Pesquisar bens por nome de servidor</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome do(a) servidor(a)"
                            onChange={event => setServidor((event.target.value).toUpperCase())}
                            value={servidor}
                        />
                        Instruções: 
                        Os dados aparecerão após a digitação do nome completo<br/>
                        Não utilize acentos ou cedilha(ç)<br/>
                    </form>
                </label>

                <h3>Listagem de bens vinculados a {servidor}</h3>
                <main>{bensFiltrados}</main>
                <h5>Última atualização 11/08/2021</h5>
            </>
        )
    }


    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}