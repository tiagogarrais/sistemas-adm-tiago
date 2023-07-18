import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQRCode } from 'next-qrcode'

export function MostrarAmbiente() {
  const router = useRouter()
  const ambiente = router.query.ambiente
  const linkApiSala = `../api/ambientes/${ambiente}`
  const { Canvas } = useQRCode()
  const linkDestaPagina = `https://admtiago.com.br/ambientes/${ambiente}`
  const [dadosJson, setDadosJson] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(linkApiSala)
        const dadosBrutos = await response.json()
        setDadosJson(dadosBrutos)
      } catch (error) {
        console.log(
          'Erro capturado, consulte o código para mais informações',
          error
        )
      }
    }

    fetchData()
  }, [linkApiSala])

  function renderizarDado(id, texto) {
    return <span id={id}>{texto}</span>
  }

  function renderizarInformacao(id, texto) {
    return (
      <div>
        <p>{texto}</p>
      </div>
    )
  }

  function calcularArea() {
    return (dadosJson.larguraLesteOeste * dadosJson.comprimento).toFixed(1)
  }

  return (
    <div>
      <h2 id="nomeAmbiente">{dadosJson.nomeAmbiente}</h2>
      <p>Chave número: {ambiente}</p>

      {dadosJson.frequenciaSemanalLimpeza &&
        renderizarInformacao(
          'frequenciaSemanalLimpeza',
          `Frequência semanal de limpeza: ${dadosJson.frequenciaSemanalLimpeza}`
        )}
      {dadosJson.telefone &&
        renderizarInformacao(
          'telefone',
          `Número do telefone: ${dadosJson.telefone}`
        )}
      {dadosJson.larguraLesteOeste &&
        renderizarInformacao(
          'largura',
          `Largura: ${dadosJson.larguraLesteOeste}`
        )}
      {dadosJson.comprimento &&
        renderizarInformacao(
          'comprimento',
          `Comprimento: ${dadosJson.comprimento}`
        )}
      {dadosJson.altura &&
        renderizarInformacao('altura', `Altura: ${dadosJson.altura}`)}
      {dadosJson.possuigaiolaProjetor &&
        renderizarInformacao(
          'possuigaiolaProjetor',
          `Possui gaiola para projetor? ${dadosJson.possuigaiolaProjetor}`
        )}
      {dadosJson.possuiCondicionadorAr &&
        renderizarInformacao(
          'possuiCondicionadorAr',
          `Possui ar-condicionado? ${dadosJson.possuiCondicionadorAr}`
        )}
      {dadosJson.possuiProjetor &&
        renderizarInformacao(
          'possuiProjetor',
          `Possui projetor? ${dadosJson.possuiProjetor}`
        )}
      {dadosJson.possuiQuadroLousa &&
        renderizarInformacao(
          'possuiQuadroLousa',
          `Possui quadro / lousa? ${dadosJson.possuiQuadroLousa}`
        )}
      {dadosJson.possuiSuporteProjetor &&
        renderizarInformacao(
          'possuiSuporteProjetor',
          `Possui suporte para projetor? ${dadosJson.possuiSuporteProjetor}`
        )}
      {dadosJson.possuiCadeiraAcessível &&
        renderizarInformacao(
          'possuiCadeiraAcessível',
          `Possui cadeira acessível? ${dadosJson.possuiCadeiraAcessível}`
        )}
      {dadosJson.possuiMesaAcessível &&
        renderizarInformacao(
          'possuiMesaAcessível',
          `Possui mesa acessível? ${dadosJson.possuiMesaAcessível}`
        )}
      {dadosJson.potenciaWattsCondicionadorAr &&
        renderizarInformacao(
          'potenciaWattsCondicionadorAr',
          `Qual a potência em Watts do ar-condicionado? ${dadosJson.potenciaWattsCondicionadorAr}`
        )}
      {dadosJson.quantCarteiras &&
        renderizarInformacao(
          'quantCarteiras',
          `Quantidade de carteiras: ${dadosJson.quantCarteiras}`
        )}
      {dadosJson.quantLampadas &&
        renderizarInformacao(
          'quantLampadas',
          `Quantidade de lâmpadas: ${dadosJson.quantLampadas}`
        )}
      {dadosJson.tipoIluminacao &&
        renderizarInformacao(
          'tipoIluminacao',
          `Tipo de iluminação: ${dadosJson.tipoIluminacao}`
        )}
      {dadosJson.tipoTeto &&
        renderizarInformacao('tipoTeto', `Tipo de teto: ${dadosJson.tipoTeto}`)}

      <span id="areaM2">Área em metros quadrados: {calcularArea()}</span>

      <p>Link desta página: {linkDestaPagina}</p>
      <div className="center">
        <Canvas
          text={linkDestaPagina}
          options={{
            level: 'M',
            margin: 3,
            scale: 4,
            width: 200
          }}
        />
      </div>
    </div>
  )
}
