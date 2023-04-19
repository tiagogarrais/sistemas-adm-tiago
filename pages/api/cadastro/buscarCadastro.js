import connect from '../../../src/utils/mongodb'

export default async function buscarCadastro(require, response) {
  const { db } = await connect()
  const dados = await db
    .collection('usuarios')
    .findOne({ email: 'tiagoarraisholanda@gmail.com' })
  response.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate')
  response.status(200).json(dados)
}
