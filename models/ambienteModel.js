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
    required: false
  },
  possuiCondicionadorAr: {
    type: String,
    required: true
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
  potenciaWattsCondicionadorAr: {
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
