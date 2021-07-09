import { useSession } from 'next-auth/client'
import OutrosSistemas from '../components/OutrosSistemas'

export default function Home() {

    const [session, loading] = useSession()

    if (session) {
        return (
            <div className='conteudo'>
                <OutrosSistemas />
            </div>
        )
                
    }
    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}