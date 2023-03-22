import { useSession, signIn } from 'next-auth/react'
import BotaoPadrao from '../components/BotaoPadrao'


export default function Home() {
    
    const {data: session} = useSession()
    
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
                            href='https://feiralivrebrejosanto.com.br'
                        />

                    <h2>Redes Sociais Corporativas</h2>

                    <BotaoPadrao
                        nome='Loja Stella Maris'
                        href='https://instagram.com/comprestellamaris'
                    />

                    <BotaoPadrao
                        nome='Pão da Stella Maris'
                        href='https://instagram.com/paodastellamaris'
                    />

                    <BotaoPadrao
                        nome='Site Feira Livre Brejo Santo'
                        href='https://facebook.com/feiralivrebrejosanto'
                    />

                </div>
            </div>
        )
    }
    return (
        <div className='conteudo'>
            <p>Para acessar este conteúdo é necessário fazer login</p>
            <button onClick={() => signIn()}>Entrar</button>

        </div>)
}