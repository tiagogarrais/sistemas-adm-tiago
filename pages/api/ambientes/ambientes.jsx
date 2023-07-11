import connect from '../../../src/utils/mongodb'
import connectMongo from '../../../utils/connectMongo'
import Ambiente from '../../../models/ambienteModel'

export default async function transportes(req, res) {
  try {
    const { method } = req
    const { db } = await connect()

    switch (method) {
      case 'GET':
        res.status(200).json('Em desenvolvimento')
        break

      case 'POST':
        try {
          await connectMongo()
          const ambiente = await Ambiente.create(req.body)
          res.json({ ambiente })
        } catch (error) {
          console.log(error)
          res.json({ error })
        }
        break

      case 'DELETE':
        res.status(200).json('Em desenvolvimento')
        break

      case 'PATCH':
        res.status(200).json('Em desenvolvimento')
        break

      default:
        res.setHeader('Permitido', ['GET', 'PATCH', 'POST', 'DELETE'])
        res.status(405).end(`Método ${method} não permitido`)
    }
  } catch (err) {
    res.status(500).json({ statuscode: 500, message: err.message })
  }
}
