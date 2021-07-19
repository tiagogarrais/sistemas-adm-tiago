import { useSession } from 'next-auth/client'

export default function Bens() {

    const [session] = useSession()
    async function mostrarBens(){
        const bensUfca = await fetch('http://localhost:3000/api/buscarBens')
        const bensJson = await bensUfca.json()

        let resultado = ''
        for (let bem of bensJson){
            resultado += `<li>${bem.tombamento}</li>`
            resultado += `<li>${bem.denominacao}</li>`
            resultado += `<li>${bem.responsavel}</li>`

        }

        document.querySelector('main').innerHTML = resultado
    }

   
    if (session) {
        return (
            <div className='conteudo'>
                <button onClick={mostrarBens}>Mostrar Bens</button>
                <main></main>

            </div>
        )

    }
    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}