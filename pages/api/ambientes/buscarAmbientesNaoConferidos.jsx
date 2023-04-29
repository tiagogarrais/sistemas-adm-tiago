import connect from "../../../src/utils/mongodb"

export default async function buscarAmbientesNaoConferidos(require, response) {
    const { db } = await connect()
    const ambientesNaoConferidos = await db.collection('ambientesNovosEnvios').find().sort({numeroIdentificacao:1}).toArray()
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    response.status(200).json(ambientesNaoConferidos)
}