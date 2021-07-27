import { useSession, signIn, signOut } from 'next-auth/client'

export default function BarraLogin() {

    const [session, loading] = useSession()

    if (session) {
        return <div className='barralogin'>
            Bem vindo(a) {session.user.name} <br />
            <button onClick={() => signOut()}>Sair</button>

        </div>
    }

    return <div className='barralogin'>
        Não logado <br />
        <button onClick={() => signIn('google')}>Entrar</button>
    </div>

}



