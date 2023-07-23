import { Schema, model, models } from 'mongoose'

const AmbienteSchema = new Schema({
  numeroIdentificacao: {
    type: Number,
    required: true,
    unique: true
  },

  nomeAmbiente: {
    type: String,
    required: true
  },

  telefone: {
    type: String,
    required: false
  },

  larguraLesteOeste: {
    type: Number,
    required: false
  },

  comprimento: {
    type: Number,
    required: false
  },

  altura: {
    type: Number,
    required: false
  },

  frequenciaSemanalLimpeza: {
    type: Number,
    required: false
  },

  possuigaiolaProjetor: {
    type: String,
    required: false
  },

  possuiProjetor: {
    type: String,
    required: false
  },

  possuiQuadroLousa: {
    type: String,
    required: false
  },

  possuiSuporteProjetor: {
    type: String,
    required: false
  },

  possuiCadeiraAcessível: {
    type: String,
    required: false
  },

  possuiMesaAcessível: {
    type: String,
    required: false
  },

  possuiCondicionadorAr: {
    type: String,
    required: true
  },

  quantCarteiras: {
    type: Number,
    required: false
  },

  quantLampadas: {
    type: Number,
    required: true
  },

  tipoIluminacao: {
    type: String,
    required: true
  },

  tipoTeto: {
    type: String,
    required: true
  }
})

const Ambiente = models.Ambiente || model('Ambiente', AmbienteSchema)

export default Ambiente
