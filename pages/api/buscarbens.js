async function buscarbens(request, response) {

    const bensUfca = await fetch("http://dadosabertosapi.ufca.edu.br/service/recurso/bens_moveis.json")
    const bensUfcaJson = await bensUfca.json()
    
    response.json(bensUfcaJson)
}

export default buscarbens