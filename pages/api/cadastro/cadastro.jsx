import connect from '../../../src/utils/mongodb'
import connectMongo from '../../../utils/connectMongo'
import Usuario from '../../../models/cadastroModel'

export default async function buscarCadastro(req, res) {
  try {
    const { method } = req
    const { db } = await connect()

    switch (method) {
      case 'GET':
        const dados = await db
          .collection('usuarios')
          .findOne({ email: req.query.email })
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
        res.status(200).json(dados)
        break

      case 'POST':
        try {
          await connectMongo()
          const usuario = await Usuario.create(req.body)
          res.json({ usuario })
        } catch (error) {
          console.log(error)
          res.json({ error })
        }
        break

      case 'PUT':
        try {
          res.json('Em implementação')
        } catch (error) {
          console.log(error)
          res.json({ error })
        }
        break

      default:
        res.setHeader('Permitido', ['GET', 'POST', 'PUT'])
        res.status(405).end(`Método ${method} não permitido`)
    }
  } catch (err) {
    res.status(500).json({ statuscode: 500, message: err.message })
  }
}
