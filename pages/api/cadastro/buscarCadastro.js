//import { NextApiRequest, NextApiResponse } from 'next'
import connect from '../../../src/utils/mongodb'


export default async function buscarCadastro(req, res) {
  try {
    const { method } = req
    const { db } = await connect()

    switch (method) {
      case 'GET':
        const dados = await db.collection('usuarios').findOne({ email: req.query.email })
        res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate')
        res.status(200).json(dados)
        break

      case 'POST':
          const cadastro = req.body
          const res = await db.collection('usuarios').insertOne(cadastro)
          res.status(200).json(res.ops[0])
          buscarCadastro()
          break

      default:
        res.setHeader('Permitido', ['GET', 'POST'])
        res.status(405).end(`Método ${method} não permitido`)
    }
  } catch (err) {
    buscarCadastro()
    res.status(500).json({ statuscode: 500, message: err.message })

  }
}