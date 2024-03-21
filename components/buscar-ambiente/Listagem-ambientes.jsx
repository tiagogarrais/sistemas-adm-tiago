import { useSession } from "next-auth/react";
import Link from "next/link";

// Array contendo detalhes de cada ambiente
const ambientes = [
  { id: 1, nome: "Entrada principal - Externa" },
  { id: 2, nome: "Recepção" },
  { id: 3, nome: "Administração" },
  { id: 4, nome: "Sala de aula 10 e Miniauditório" },
  { id: 5, nome: "Brinquedoteca" },
  { id: 6, nome: "Gabinete Docente - chave 6" },
  { id: 7, nome: "Banheiro infantil" },
  { id: 8, nome: "Gabinete Docente - chave 8" },
  { id: 9, nome: "Depósito de material de limpeza" },
  { id: 10, nome: "Cantina / Cozinha" },
  { id: 11, nome: "Banheiro acessível Masculino 1" },
  { id: 12, nome: "Banheiro Acessível Feminino 1" },
  { id: 13, nome: "Banheiro feminino 1" },
  { id: 14, nome: "Banheiro masculino 1" },
  { id: 15, nome: "Laboratório de Química" },
  { id: 16, nome: "Sala de aula 11" },
  { id: 17, nome: "Sala de aula 12" },
  { id: 18, nome: "Depósito de reagentes" },
  { id: 19, nome: "Apoio acadêmico" },
  { id: 20, nome: "Rádio" },
  { id: 21, nome: "Estúdio de gravação" },
  { id: 22, nome: "Laboratório de Informática 1" },
  { id: 23, nome: "Laboratório de Informática 2" },
  { id: 24, nome: "Rack DTI" },
  { id: 25, nome: "Gabinete Docente - chave 25" },
  { id: 26, nome: "Sala de aula 09" },
  { id: 27, nome: "Sala de aula 08" },
  { id: 28, nome: "Sala de aula 07" },
  { id: 29, nome: "L@bmatec" },
  { id: 30, nome: "Biblioteca" },
  { id: 31, nome: "Sala de estudo 2 - Biblioteca" },
  { id: 32, nome: "Sala de estudo 1 - Biblioteca" },
  { id: 33, nome: "Sala de processamento técnico - Biblioteca" },
  { id: 34, nome: "Acesso Diretoria e reunião" },
  { id: 35, nome: "Sala de reuniões" },
  { id: 36, nome: "Secretaria" },
  { id: 37, nome: "Diretoria e Vice Diretoria" },
  { id: 38, nome: "Copa" },
  { id: 39, nome: "Coordenações" },
  { id: 40, nome: "Palco e refeitório" },
  { id: 41, nome: "Praça interna" },
  { id: 100, nome: "Entrada Principal - Interna" },
  { id: 101, nome: "Sala de aula 01" },
  { id: 102, nome: "Sala de aula 02" },
  { id: 103, nome: "Sala de aula 03" },
  { id: 104, nome: "Sala de aula 04" },
  { id: 105, nome: "Sala de aula 05" },
  { id: 106, nome: "Sala de aula 06" },
  { id: 107, nome: "Gabinete Docente - chave 107" },
  { id: 108, nome: "Banheiro feminino 2" },
  { id: 109, nome: "Banheiro masculino 2" },
  { id: 110, nome: "Banheiro feminino 3" },
  { id: 111, nome: "Banheiro masculino 3" },
  { id: 112, nome: "Apoio Horto / Projetos Institucionais" },
  { id: 113, nome: "Entrada" },
  { id: 114, nome: "Entrada" },
  { id: 115, nome: "Gabinete Docente - chave 115" },
  { id: 116, nome: "Banheiro acessível feminino 2" },
  { id: 117, nome: "Banheiro acessível masculino 2" },
  { id: 119, nome: "Laboratório de Física" },
  { id: 120, nome: "Laboratório de Biologia" },
  { id: 121, nome: "Fluxo Laminar" },
  { id: 123, nome: "Autoclave" },
  { id: 124, nome: "Casa de gás" },
  { id: 125, nome: "Casa de energia" },
  { id: 126, nome: "Banheiro masculino servidores" },
  { id: 127, nome: "Banheiro feminino servidores" },
  { id: 129, nome: "Guarita" },
  { id: 130, nome: "Banheiro Guarita" },
  { id: 131, nome: "Barrilete" },
  { id: 132, nome: "Depósito de manutenção" },
  { id: 134, nome: "Sala de apoio ao discente" },
  { id: 135, nome: "Gabinete Docente - chave 135" },
  { id: 136, nome: "Gabinete Docente - chave 136" },
  { id: 137, nome: "Gabinete Docente - chave 137" },
  { id: 138, nome: "Estacionamento e bicicletário" },
  { id: 139, nome: "Horto didático" },
  { id: 140, nome: "Calçada para a rua" },
  {
    id: 141,
    nome: "Vaga deficiente, idosos ate corredor banheiros acessiveis",
  },
  { id: 142, nome: "Jardim da recepção" },
  {
    id: 143,
    nome: "Corredor sala de aula 10, acesso direção, copa, até saída para o bicicletário",
  },
  { id: 144, nome: "Corredor praça interna até horto didático" },
  {
    id: 145,
    nome: "Corredor sala de aula 1, 2, 3, 4, 5 até cruzamento com o outro corredor",
  },
  { id: 146, nome: "Corredor centro acadêmico até laboratório de informática" },
  { id: 147, nome: "Corredor biblioteca até sala de aula 9" },
  { id: 148, nome: "Corredor banheiro feminino 1 até sala de reagentes" },
  {
    id: 149,
    nome: "Corredor laboratórios física, biologia, autoclave até casa de gás",
  },
  { id: 150, nome: "Entrada - Estacionamento" },
];

const BotaoAmbiente = ({ id, nome }) => (
  <div className="button">
    <Link className="link" href={{ pathname: `/ambientes/${id}` }}>
      {`${id} - ${nome}`}
    </Link>
  </div>
);

export default function ListagemAmbientes() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h2>Listagem de Ambientes</h2>
        {ambientes.map((ambiente) => (
          <BotaoAmbiente key={ambiente.id} {...ambiente} />
        ))}
      </>
    );
  }
}
