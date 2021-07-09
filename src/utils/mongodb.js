import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

const cachedDb
const cachedClient

if (!uri) {
    trow new Error(
        'Você precisa definir a variável MONGODB_URI dentro do arquivo .env.local', 
    )
}

if (!dbName) {
    trow new Error(
        'Você precisa definir a variável MONGODB_DB dentro do arquivo .env.local', 
    )
}

export async function conectarBancoDeDados(){
    if (cachedClient && cachedDb){
        return {client: cachedClient, db: cachedDb}
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = await client.db(dbName)

    cachedClient = client
    cachedDb = db

    return {client, db}

}

export default conectarBancoDeDados


