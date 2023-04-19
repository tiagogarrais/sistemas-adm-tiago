import { useSession, signIn, signOut } from 'next-auth/react'
import BotaoPadrao from './BotaoPadrao'

export default function BarraLogin() {

    const { data: session } = useSession()

    if (session) {
        return  <>
            <div id='barra-login'>
                Bem vindo(a) {session.user.name}
                <button onClick={() => signOut()}>Sair</button>
                <BotaoPadrao
                    nome='Página principal'
                    href='/'
                />


                <BotaoPadrao
                    nome='Meu cadastro'
                    href='/cadastro/Cadastro'
                />
            </div>
        </>
    }

    return (
        <>
            <div id='barra-login'>
                Não logado
                <button onClick={() => signIn()}>Entrar</button>
            </div>
        </>
    )

}