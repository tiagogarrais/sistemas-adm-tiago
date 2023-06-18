import { Schema, model, models } from 'mongoose'

const usuarioSchema = new Schema({
  nome: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  telefone: {
    type: String
  },

  cpf: {
    type: String
  },

  dataInformacao: {
    type: Date,
    required: true
  }
})

const Usuario = models.Usuario || model('Usuario', usuarioSchema)

export default Usuario
