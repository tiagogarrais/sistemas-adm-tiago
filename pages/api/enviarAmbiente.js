import connect from "../../src/utils/mongodb"

export default async function enviarAmbiente(req, res) {
    const { db } = await connect()
    const ambiente = req.body
    const response = await db.collection('ambientesNovosEnvios').insertOne(ambiente)
    res.status(200).json(response.ops[0])
}