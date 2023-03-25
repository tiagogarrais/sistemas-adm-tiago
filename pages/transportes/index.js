import { useSession } from 'next-auth/react'

export default function Transportes() {
    const {data: session} = useSession()
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
