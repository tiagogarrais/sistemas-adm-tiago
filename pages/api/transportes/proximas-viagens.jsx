import connect from '../../../src/utils/mongodb'

export default async function proximasViagens(require, response) {
  const { db } = await connect()
  const proximasViagens = await db
    .collection('solicitatransportes')
    .find()
    .sort({ dataIda: 1 })
    .toArray()
  response.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate')
  response.status(200).json(proximasViagens)
}
