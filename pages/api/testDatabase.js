import connect from "../../src/utils/mongodb"

export default async function testeDatabase(req, res) {
    const { db } = await connect()
    const response = await db.collection('teste').insertOne(
        {
            "id": "13",
            "nomeAmbiente": "Banheiro feminino 1",
            "ID + Descrição (fórmula)": "13 - Banheiro feminino 1",
            "Tipo de teto": "Teto na parte de baixo",
            "Largura\n(leste>oeste)": "",
            "Comprimento\n(norte>sul)": "",
            "Altura": "",
            "Área m2": "",
            "Algum reparo ou observação a ser feita?": "",
            "Data da informação": "",
            "Existe ticket aberto com a solicitação do reparo?": "",
            "Servidor responsável pelo ambiente": "Rodrigo Lacerda Carvalho",
            "Responsabilidade pela limpeza": "Francisca Aurielia Pereira da Silva",
            "Classificação": "Interna - Piso frio",
            "Produtividade recomendada para limpeza": "600",
            "Tipo": "Ambiente com chave"
        }
    )
    res.status(200).json(response.ops[0])
}