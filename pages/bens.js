import { useSession } from 'next-auth/client'

export default function Bens() {

    const [session] = useSession()

    async function listarTodosOsBens() {
        const bensUfca = await fetch('/api/buscarBens')
        const bensJson = await bensUfca.json()
        let resultado = ''
        for (let bem of bensJson) {
            resultado += `<li>${bem.tombamento}</li>`
            resultado += `<li>${bem.denominacao}</li>`
            resultado += `<li>${bem.responsavel}</li>`
            resultado += "<hr/>"
        }
        document.querySelector('h3').innerHTML = "Listagem de todos os bens com tombo - UFCA"
        document.querySelector('main').innerHTML = resultado
    }

    async function listarBensPorServidor(event) {
        event.preventDefault()
        document.querySelector('h3').innerHTML = "Funcionalidade em desenvolvimento"
        document.querySelector('main').innerHTML = ''
    }


    if (session) {
        return (
            <div className='conteudo'>
                <button onClick={listarTodosOsBens}>Listar todos os bens</button>
                <label>
                Pesquisar por nome do servidor
                    <form onSubmit={listarBensPorServidor}>
                        <input type="text" placeholder="Nome do servidor responsável"></input>
                        <button onClick={listarBensPorServidor}>Listar bens por nome do servidor</button>
                    </form>
                </label>
                <h3></h3>
                <main></main>
            </div>
        )

    }
    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}