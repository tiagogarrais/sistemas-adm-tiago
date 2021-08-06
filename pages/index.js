import { useSession } from 'next-auth/client'
import OutrosSistemas from '../components/OutrosSistemas'
import Link from 'next/link'
import BotaoPadrao from '../components/BotaoPadrao'


export default function Home() {
    const [session, loading] = useSession()
    if (session) {
        return (
            <div className='conteudo'>
                <div className='sistemas'>
                    <h2>Sistemas administrativos hospedados neste site</h2>

                    <BotaoPadrao nome='Salas e ambientes' href='/ambientes/ambientes' />
                    <BotaoPadrao nome='Brainstorming' href='/brainstorming/brainstorming' />
                    <br />
                </div>
                <OutrosSistemas />
            </div>
        )

    }
    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}