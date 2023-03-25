import { useSession } from 'next-auth/react'

export default function BensTombados() {
    const {data: session} = useSession()

    if (session) {
        return (
            <>
                <h2>Relação de Bens Tombados</h2>
                <div id='tabela-bens-tombados'>
                </div>
            </>
        )
    }

    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)

}