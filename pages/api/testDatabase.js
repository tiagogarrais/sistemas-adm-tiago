import connect from "../../src/utils/mongodb"

export default async function testeDatabase(req, res) {
    const { db } = await connect()
    const response = await db.collection('teste').insertOne(
        {
            "id": "13"            
        }
    )
    res.status(200).json(response.ops[0])
}