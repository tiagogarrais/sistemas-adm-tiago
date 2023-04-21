import connect from '../../../src/utils/mongodb'

export default async function buscarCadastro(request, response) {
  const { db } = await connect()

  const dados = await db
    .collection('usuarios')
    .findOne({ email: process.env.EMAIL_PARA_TESTE })
  
  response.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate')
  response.status(200).json(dados)
}
