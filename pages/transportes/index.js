import { useSession } from 'next-auth/client'

export default function Transportes() {
    const [session, loading] = useSession()
    if (session) {
        return (
            <div className='conteudo'>

                Transportes do Instituto de Formação de Educadores

            </div>
        )
    }

    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}
