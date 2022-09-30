import { useSession, signIn } from 'next-auth/client'

import BotaoPadrao from '../components/BotaoPadrao'


export default function Home() {
    const [session, loading] = useSession()
    if (session) {
        return (
            <div className='conteudo'>
                <div className='sistemas'>
                    <h2>Sistemas desenvolvidos para a UFCA</h2>
                        <BotaoPadrao 
                            nome='Brainstorming'
                            href='/brainstorming/brainstorming' />
                        
                        <BotaoPadrao 
                            nome='Bens por servidor'
                            href='/bens/consultaBensPorServidor' />
                    
                    <h2>Sistemas desenvolvidos para compartilhar conteúdo didático e instrucional</h2>
                        <BotaoPadrao 
                            nome='Plataforma de cursos'
                            href='http://conexaofuturo.com.br'
                        />
                    
                    <h2>Loja virtual</h2>
                        
                            <BotaoPadrao 
                                nome='Feira Livre Brejo Santo'
                                href='http://feiralivrebrejosanto.com.br'
                        />
                </div>
            </div>
        )
    }
    return (
        <div className='conteudo'>
            <p>Para acessar este conteúdo é necessário fazer login</p>
            <button onClick={() => signIn('google')}>Entrar</button>

        </div>)
}