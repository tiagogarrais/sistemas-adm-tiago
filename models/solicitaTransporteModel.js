import { Schema, model, models } from "mongoose";

const solicitaTransporteSchema = new Schema({
  dataSolicitacao: {
    type: Date,
    required: true,
  },

  objetivo: {
    type: String,
    required: true,
  },

  nome: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  telefone: {
    type: String,
  },

  veiculo: {
    type: String,
    required: true,
  },

  uf: {
    type: String,
    required: true,
  },

  cidade: {
    type: String,
    required: true,
  },

  dataIda: {
    type: Date,
    required: true,
  },

  dataRetorno: {
    type: Date,
    required: true,
  },

  saidaCentro: {
    type: String,
    required: true,
  },

  saidaAbaiara: {
    type: String,
    required: true,
  },

  objetivo1: {
    type: String,
    required: true,
  },

  objetivo2: {
    type: String,
    required: true,
  },

  objetivo3: {
    type: String,
    required: true,
  },

  objetivo4: {
    type: String,
    required: true,
  },

  objetivo5: {
    type: String,
    required: true,
  },

  objetivo6: {
    type: String,
    required: true,
  },

  tipo: {
    type: String,
    required: true,
  },

  setor: {
    type: String,
    required: true,
  },

  statusViagem: {
    type: String,
    required: true,
  },

  passageiro1: {
    type: String,
    required: false,
  },

  identificacao1: {
    type: String,
    required: false,
  },

  passageiro2: {
    type: String,
    required: false,
  },

  identificacao2: {
    type: String,
    required: false,
  },

  passageiro3: {
    type: String,
    required: false,
  },

  identificacao3: {
    type: String,
    required: false,
  },

  passageiro4: {
    type: String,
    required: false,
  },

  identificacao4: {
    type: String,
    required: false,
  },

  passageiro5: {
    type: String,
    required: false,
  },

  identificacao5: {
    type: String,
    required: false,
  },

  passageiro6: {
    type: String,
    required: false,
  },

  identificacao6: {
    type: String,
    required: false,
  },

  passageiro7: {
    type: String,
    required: false,
  },

  identificacao7: {
    type: String,
    required: false,
  },

  passageiro8: {
    type: String,
    required: false,
  },

  identificacao8: {
    type: String,
    required: false,
  },

  passageiro9: {
    type: String,
    required: false,
  },

  identificacao9: {
    type: String,
    required: false,
  },

  passageiro10: {
    type: String,
    required: false,
  },

  identificacao10: {
    type: String,
    required: false,
  },

  passageiro11: {
    type: String,
    required: false,
  },

  identificacao11: {
    type: String,
    required: false,
  },

  passageiro12: {
    type: String,
    required: false,
  },

  identificacao12: {
    type: String,
    required: false,
  },

  passageiro13: {
    type: String,
    required: false,
  },

  identificacao13: {
    type: String,
    required: false,
  },

  passageiro14: {
    type: String,
    required: false,
  },

  identificacao14: {
    type: String,
    required: false,
  },

  passageiro15: {
    type: String,
    required: false,
  },

  identificacao15: {
    type: String,
    required: false,
  },

  passageiro16: {
    type: String,
    required: false,
  },

  identificacao16: {
    type: String,
    required: false,
  },

  passageiro17: {
    type: String,
    required: false,
  },

  identificacao17: {
    type: String,
    required: false,
  },

  passageiro18: {
    type: String,
    required: false,
  },

  identificacao18: {
    type: String,
    required: false,
  },

  passageiro19: {
    type: String,
    required: false,
  },

  identificacao19: {
    type: String,
    required: false,
  },

  passageiro20: {
    type: String,
    required: false,
  },

  identificacao20: {
    type: String,
    required: false,
  },

  passageiro21: {
    type: String,
    required: false,
  },

  identificacao21: {
    type: String,
    required: false,
  },

  passageiro22: {
    type: String,
    required: false,
  },

  identificacao22: {
    type: String,
    required: false,
  },

  passageiro23: {
    type: String,
    required: false,
  },

  identificacao23: {
    type: String,
    required: false,
  },

  passageiro24: {
    type: String,
    required: false,
  },

  identificacao24: {
    type: String,
    required: false,
  },

  passageiro25: {
    type: String,
    required: false,
  },

  identificacao25: {
    type: String,
    required: false,
  },

  passageiro26: {
    type: String,
    required: false,
  },

  identificacao26: {
    type: String,
    required: false,
  },

  passageiro27: {
    type: String,
    required: false,
  },

  identificacao27: {
    type: String,
    required: false,
  },

  passageiro28: {
    type: String,
    required: false,
  },

  identificacao28: {
    type: String,
    required: false,
  },

  passageiro29: {
    type: String,
    required: false,
  },

  identificacao29: {
    type: String,
    required: false,
  },

  passageiro30: {
    type: String,
    required: false,
  },

  identificacao30: {
    type: String,
    required: false,
  },

  passageiro31: {
    type: String,
    required: false,
  },

  identificacao31: {
    type: String,
    required: false,
  },

  passageiro32: {
    type: String,
    required: false,
  },

  identificacao32: {
    type: String,
    required: false,
  },

  passageiro33: {
    type: String,
    required: false,
  },

  identificacao33: {
    type: String,
    required: false,
  },

  passageiro34: {
    type: String,
    required: false,
  },

  identificacao34: {
    type: String,
    required: false,
  },

  passageiro35: {
    type: String,
    required: false,
  },

  identificacao35: {
    type: String,
    required: false,
  },

  passageiro36: {
    type: String,
    required: false,
  },

  identificacao36: {
    type: String,
    required: false,
  },

  passageiro37: {
    type: String,
    required: false,
  },

  identificacao37: {
    type: String,
    required: false,
  },

  passageiro38: {
    type: String,
    required: false,
  },

  identificacao38: {
    type: String,
    required: false,
  },

  passageiro39: {
    type: String,
    required: false,
  },

  identificacao39: {
    type: String,
    required: false,
  },

  passageiro40: {
    type: String,
    required: false,
  },

  identificacao40: {
    type: String,
    required: false,
  },

  passageiro41: {
    type: String,
    required: false,
  },

  identificacao41: {
    type: String,
    required: false,
  },

  passageiro42: {
    type: String,
    required: false,
  },

  identificacao42: {
    type: String,
    required: false,
  },

  passageiro43: {
    type: String,
    required: false,
  },

  identificacao43: {
    type: String,
    required: false,
  },

  passageiro44: {
    type: String,
    required: false,
  },

  identificacao44: {
    type: String,
    required: false,
  },
});

const SolicitaTransporte =
  models.SolicitaTransporte ||
  model("SolicitaTransporte", solicitaTransporteSchema);

export default SolicitaTransporte;
