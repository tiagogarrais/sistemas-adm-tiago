import connect from "../../src/utils/mongodb"

export default async function enviarAmbiente(req, res) {
    const { db } = await connect()
    const response = await db.collection('teste').insertOne({
        "Funcionou": true
    })
    res.status(200).json(response.ops[0])
}