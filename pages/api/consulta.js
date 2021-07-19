import { connectToDatabase } from "../../src/utils/mongodb"

export default async function buscarDados (req, res) {
  const { db } = await connectToDatabase()
  const dados = await db.collection("ufca").find().toArray()
  res.json(dados)
}