import connect from "../../../src/utils/mongodb"

export default async function enviarCadastro(req, res) {
    const { db } = await connect()
    const cadastro = req.body
    const response = await db.collection('usuarios').insertOne(cadastro)
    res.status(200).json(response.ops[0])
}