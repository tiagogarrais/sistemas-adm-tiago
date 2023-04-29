import connect from "../../../lib/mongodb2"

export default async function buscarAmbientesConferidos(require, response) {
    const { db } = await connect()
    const ambientesConferidos = await db.collection('ambientes').find().sort({numeroIdentificacao:1}).toArray()
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    response.status(200).json(ambientesConferidos)
}