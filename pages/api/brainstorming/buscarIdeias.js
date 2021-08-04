import connect from "../../../src/utils/mongodb"

export default async function buscarIdeias(require, response) {
    const { db } = await connect()
    const ideias = await db.collection('brainstorming').find().sort({localAplicacao:1}).toArray()
    response.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate')
    response.status(200).json(ideias)
}