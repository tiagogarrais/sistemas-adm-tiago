import { useSession, signIn, signOut } from 'next-auth/client'

export default function BarraLogin() {

    const [session, loading] = useSession()

    if (session) {
        return <div id='barra-login'>
            Bem vindo(a) {session.user.name}
            <button onClick={() => signOut()}>Sair</button>

        </div>
    }

    return <div id='barra-login'>
        Não logado
        <button onClick={() => signIn('google')}>Entrar</button>
    </div>

}



