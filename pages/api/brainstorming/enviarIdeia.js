import connect from "../../../src/utils/mongodb"

export default async function enviarIdeia(req, res) {
    const { db } = await connect()
    const ideia = req.body
    const response = await db.collection('brainstorming').insertOne(ideia)
    res.status(200).json(response.ops[0])
}