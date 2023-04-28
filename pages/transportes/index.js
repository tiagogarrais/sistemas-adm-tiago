import { useSession } from 'next-auth/react'
import button from '../../components/button'
import Contador from '../../components/contador-regressivo/Contador'
import SolicitarVeiculo from '../../components/SolicitarVeiculo'

export default function Transportes() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className='conteudo'>

                <h1>Transportes do Instituto de Formação de Educadores</h1>
                <SolicitarVeiculo />
            </div>
        )
    }

    return (
        <div className='conteudo'>
            <Contador />
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}
