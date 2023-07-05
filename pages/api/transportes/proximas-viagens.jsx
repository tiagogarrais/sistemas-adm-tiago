import connect from '../../../src/utils/mongodb'

export default async function proximasViagens(require, response) {
  const { db } = await connect()
  const dataAtual = new Date()
  const dia = dataAtual.getDate()
  const mes = dataAtual.getMonth() + 1
  const ano = dataAtual.getFullYear()
  const stringData = ano + '-' + mes + '-' + dia

  const proximasViagens = await db
    .collection('solicitatransportes')
    .find({ dataIda: { $gte: new Date(stringData) } })
    .sort({ dataIda: 1 })
    .toArray()
  //response.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
  response.status(200).json(proximasViagens)
}
