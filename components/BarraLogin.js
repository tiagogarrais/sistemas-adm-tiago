import { useSession, signIn, signOut } from 'next-auth/client'

export default function BarraLogin() {

    const [session, loading] = useSession()

    if (session) {
        return <div className='barralogin'>
            Logado como {session.user.email} <br />
            <button onClick={() => signOut()}>Sair</button>
        </div>
    }

    return <div className='barralogin'>
        Não logado <br />
        <button onClick={() => signIn('google')}>Entrar</button>
    </div>

}



