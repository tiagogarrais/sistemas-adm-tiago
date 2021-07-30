import connect from "../../src/utils/mongodb"

export default async function buscarAmbientes(require, response) {
    const { db } = await connect()
    const dados = await db.collection('ambientes').find().sort({numeroIdentificacao:1}).toArray()
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    response.status(200).json(dados)
}