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
            <p>Não logado</p>
        </div>)
}