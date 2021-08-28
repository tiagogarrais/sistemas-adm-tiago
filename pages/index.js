import { useSession } from 'next-auth/client'
import OutrosSistemas from '../components/OutrosSistemas'
import BotaoPadrao from '../components/BotaoPadrao'


export default function Home() {
    const [session, loading] = useSession()
    if (session) {
        return (
            <div className='conteudo'>
                <div className='sistemas'>
                    <h2>Relatórios administrativos</h2>
                    <BotaoPadrao nome='Salas e ambientes'   href='/ambientes/ambientes' />
                    <h2>Sistemas administrativos</h2>
                    <BotaoPadrao nome='Brainstorming'               href='/brainstorming/brainstorming' />
                    <BotaoPadrao nome='Bens por servidor'           href='/bens/consultaBensPorServidor' />
                    {/* <BotaoPadrao nome='Ar-condicionado quebrado'    href='/bens/arCondicionados/informarProblema' /> */}
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