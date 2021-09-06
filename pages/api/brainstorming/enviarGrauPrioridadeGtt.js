import connect from "../../../src/utils/mongodb"

export default async function enviarGrauPrioridadeGtt(req, res) {
    const { db } = await connect()
    const grauPrioridadeGtt = req.body
    const response = await db.collection('brainstorming')
        .updateOne(
            {'_id': req.body._id}, //filter
            {$set: {grauPrioridadeGtt: req.body.grauPrioridadeGtt}}, //
            {upsert: true} // Se o campo não existir será adicionado
        )
    res.status(200).json(response.ops[0])
}