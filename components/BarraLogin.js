import { useSession, signIn, signOut } from 'next-auth/react'

export default function BarraLogin() {

    const {data: session} = useSession()

    if (session) {
        return <div id='barra-login'>
            Bem vindo(a) {session.user.name}
            <button onClick={() => signOut()}>Sair</button>

        </div>
    }

    return <div id='barra-login'>
        Não logado
        <button onClick={() => signIn()}>Entrar</button>
    </div>

}