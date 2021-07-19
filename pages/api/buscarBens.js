async function buscarBens(request, response) {

    let bensUfca = await fetch("http://dadosabertosapi.ufca.edu.br/service/recurso/bens_moveis.json")
    bensUfca = await bensUfca.json()

    response.json(bensUfca)
}

export default buscarBens