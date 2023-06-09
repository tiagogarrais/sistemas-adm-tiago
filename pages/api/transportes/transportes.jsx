import connect from '../../../src/utils/mongodb'
import connectMongo from '../../../utils/connectMongo'
import SolicitaTransporte from '../../../models/solicitaTransporteModel'

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
          const transporte = await SolicitaTransporte.create(req.body)
          res.json({ transporte })
        } catch (error) {
          console.log(error)
          res.json({ error })
        }
        break

      case 'DELETE':
        res.status(200).json('Em desenvolvimento')
        break

      default:
        res.setHeader('Permitido', ['GET', 'POST', 'DELETE'])
        res.status(405).end(`Método ${method} não permitido`)
    }
  } catch (err) {
    res.status(500).json({ statuscode: 500, message: err.message })
  }
}
