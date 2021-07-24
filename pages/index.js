import { useSession } from 'next-auth/client'
import OutrosSistemas from '../components/OutrosSistemas'
import Link from 'next/link'


export default function Home() {
    const [session, loading] = useSession()
    if (session) {
        return (
            <div className='conteudo'>
                <Link href="/bens">
                    <a>Clique aqui para acessar o relatório de bens da UFCA</a>
                </Link>
                <OutrosSistemas />
            </div>
        )

    }
    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}