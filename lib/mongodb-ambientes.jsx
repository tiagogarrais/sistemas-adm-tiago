import { MongoClient } from 'mongodb'

//let cachedDb = null

export default async function connect() {
  //if (cachedDb) {
  //  return cachedDb
  //}

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = client.db('ufca')
  //cachedDb = db

  return { db }
}
