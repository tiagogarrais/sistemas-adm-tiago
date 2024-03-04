import connect from "../../../../src/utils/mongodb";
import { ObjectId } from "mongodb";

export default async function atualizarControles(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method Not Allowed" });
  }

  const { controleId, email, nome } = request.body;
  console.log(request.body);

  if (!controleId || !email) {
    return response.status(400).json({ message: "Missing parameters" });
  }

  const { db } = await connect();

  try {
    // Atualiza a dataUltimaExecucao para a data atual
    const hoje = new Date();
    const result = await db.collection("controles").updateOne(
      { _id: new ObjectId(controleId) }, // Correção aqui
      { $set: { dataUltimaExecucao: hoje.toISOString() } }
    );

    if (result.modifiedCount === 1) {
      // Insere os dados do relatório na nova collection
      const relatorio = {
        emailExecutante: email,
        dataExecucao: hoje.toISOString(),
        nomeControle: nome,
      };
      await db.collection("controle_relatorio").insertOne(relatorio);

      return response
        .status(200)
        .json({ message: "Controle atualizado com sucesso" });
    } else {
      return response.status(404).json({ message: "Controle não encontrado" });
    }
  } catch (error) {
    console.error("Erro ao atualizar controle:", error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
}
