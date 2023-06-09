import mongoose from 'mongoose'

const connectMongo = async () => mongoose.connect(process.env.MONGODB_URI_UFCA)

export default connectMongo
