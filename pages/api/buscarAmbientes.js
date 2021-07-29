import connect from "../../src/utils/mongodb"

export default async function buscarAmbientes(require, response) {
    const { db } = await connect()
    const dados = await db.collection('ambientes').find().toArray()
    response.status(200).json(dados)
}