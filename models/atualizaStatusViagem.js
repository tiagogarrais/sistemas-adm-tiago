import { Schema, model, models } from 'mongoose'

const atualizaStatusSchema = new Schema({
  statusViagem: {
    type: String,
    required: true
  }
})

const AtualizaStatus =
  models.atualizaStatus || model('AtualizaStatus', atualizaStatusSchema)

export default AtualizaStatus
