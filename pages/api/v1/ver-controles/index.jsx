import connect from "../../../../src/utils/mongodb";

export default async function controles(require, response) {
  const { db } = await connect();

  const controles = await db.collection("controles").find().toArray();

  // Ordenando os controles pela data da próxima execução (dataUltimaExecucao + intervaloEmDias)
  controles.sort((a, b) => {
    const dataProximaExecucaoA = new Date(a.dataUltimaExecucao);
    dataProximaExecucaoA.setDate(
      dataProximaExecucaoA.getDate() + parseInt(a.intervaloEmDias)
    );
    const dataProximaExecucaoB = new Date(b.dataUltimaExecucao);
    dataProximaExecucaoB.setDate(
      dataProximaExecucaoB.getDate() + parseInt(b.intervaloEmDias)
    );
    return dataProximaExecucaoA - dataProximaExecucaoB;
  });

  response.status(200).json(controles);
}
