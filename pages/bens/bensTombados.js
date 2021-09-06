import { useSession } from 'next-auth/client'

export default function BensTombados() {
    const [session] = useSession()

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