import connect from '../../../src/utils/mongodb'
import connectMongo from '../../../utils/connectMongo'
import SolicitaTransporte from '../../../models/solicitaTransporteModel'
import AtualizaStatus from '../../../models/atualizaStatusViagem'

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

      case 'PATCH':
        try {
          await connectMongo()
          const statusViagem = AtualizaStatus.findOneAndUpdate(
            { _id: req.body._id },
            { statusViagem: req.body.statusViagem }
          )
          res.json({ statusViagem })
        } catch (error) {
          console.log(error)
          res.json({ error })
        }
        break

      default:
        res.setHeader('Permitido', ['GET', 'POST', 'DELETE'])
        res.status(405).end(`Método ${method} não permitido`)
    }
  } catch (err) {
    res.status(500).json({ statuscode: 500, message: err.message })
  }
}
