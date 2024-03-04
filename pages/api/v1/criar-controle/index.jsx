import connect from "../../../../src/utils/mongodb";

export default async function criarControle(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method Not Allowed" });
  }

  const { nome, intervaloEmDias, descricao } = request.body;

  if (!nome || !intervaloEmDias || !descricao) {
    return response.status(400).json({ message: "Missing parameters" });
  }

  const { db } = await connect();

  try {
    const novoControle = {
      nome,
      intervaloEmDias: parseInt(intervaloEmDias),
      descricao,
    };

    const result = await db.collection("controles").insertOne(novoControle);

    if (result.insertedCount === 1) {
      return response
        .status(201)
        .json({ message: "Controle criado com sucesso", ...novoControle });
    } else {
      return response.status(500).json({ message: "Erro ao criar controle" });
    }
  } catch (error) {
    console.error("Erro ao criar controle:", error); // Adicionando console.error para mostrar o erro
    return response
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
