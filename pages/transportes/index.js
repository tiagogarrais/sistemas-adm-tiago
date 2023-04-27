import { useSession } from 'next-auth/react'
import BotaoPadrao from '../../components/BotaoPadrao'
import Contador from '../../components/contador-regressivo/Contador'

export default function Transportes() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className='conteudo'>

                Transportes do Instituto de Formação de Educadores

                <BotaoPadrao
                    nome="Solicitar"
                    href="/transportes/requisitar"
                />
            </div>
        )
    }

    return (
        <div className='conteudo'>
            <Contador />
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}
