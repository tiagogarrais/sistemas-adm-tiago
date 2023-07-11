import { Schema, model, models } from 'mongoose'

const AmbienteSchema = new Schema({
  numeroIdentificacao: {
    type: Number,
    required: true
  },

  nomeAmbiente: {
    type: String,
    required: true
  },
  tipoTeto: {
    type: String,
    required: true
  },
  larguraLesteOeste: {
    type: Number,
    required: true
  },
  comprimento: {
    type: Number,
    required: true
  },
  altura: {
    type: Number,
    required: true
  },
  frequenciaSemanalLimpeza: {
    type: Number,
    required: true
  },
  possuigaiolaProjetor: {
    type: String,
    required: true
  },
  possuiCondicionadorAr: {
    type: String,
    required: true
  },
  possuiProjetor: {
    type: String,
    required: true
  },
  possuiQuadroLousa: {
    type: String,
    required: true
  },
  possuiSuporteProjetor: {
    type: String,
    required: true
  },
  potenciaWattsCondicionadorAr: {
    type: String,
    required: true
  },
  quantCarteiras: {
    type: Number,
    required: true
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
