import { useSession } from 'next-auth/client'

export default function InformarProblema() {
    const [session, loading] = useSession()
    if (session) {
        return (
            <label>
                <h2>Informar problema em aparelho de ar condicionado</h2>
                <form>
                    <label>Infome o número do tombo do aparelho com defeito: {' '}
                        <input
                            type="number"
                        />
                    </label>
                    <label>Descreva o defeito apresentado{' '}
                        <textarea
                        />
                    </label>
                    <button
                        type="submit"
                    >Enviar informações</button>
                </form>
            </label>
        )
    }

    return (
        <div className='conteudo'>
            <p>Acesso negado, faça login para ver este conteúdo</p>
        </div>)
}