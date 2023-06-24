import connect from '../../../lib/mongodb-ambientes'

export default async function buscarSala(req, res) {
  const { db } = await connect()
  const ambiente = await db.collection('ambientes').find().toArray()
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
  res.status(200).json(ambiente)
}
