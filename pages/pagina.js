import { useSession, getSession } from 'next-auth/client'

export default function Pagina() {
  const [ session, loading ] = useSession()

  if (loading) return null

  if (!loading && !session) return (<div className='conteudo'><p>Acesso negado, faça login para ver este conteúdo</p></div>)

  return (
    <div className='conteudo'>
      <h2>Página protegida</h2>
      <p>Se você consegue ver este conteúdo é porque fez login no site.</p>
    </div>
  )
}