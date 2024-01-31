import Image from "next/image";
import Link from "next/link";

export default function informacoes() {
  const raioTransportes =
    "http://raiolaser.16mb.com/images/2/2a/Raio-transportes-ufca.jpeg";

  return (
    <>
      <div className="button">
        <Link href="/transportes">Voltar para a página de transportes</Link>
      </div>

      <div className="button">
        <a
          target="_blank"
          href="https://processos.ifeadm.com.br/tiago-processos/como-processar-as-solicitacoes-de-viagens-recebidas-no-campus-brejo-santo/"
        >
          Processamento da viagem
        </a>
      </div>

      <div className="texto-justificado">
        <h2>Regulamento do serviço transportes - Campus Brejo Santo</h2>
        <h3>Objetivo</h3>
        <p>
          O objetivo do serviço de transportes do Instituto de Formação de
          Educadores é servir à comunidade acadêmica da UFCA, prioritariamente a
          do Campus de Brejo Santo. Este regulamento tem a intenção de
          publicizar o serviço obedecendo aos princípios gerais de administração
          pública e atendendo de forma igualitária a quem necessitar dele,
          criando regras claras para os casos de conflitos que surgirem já que
          se trata de um recurso finito.
        </p>

        <h3>Regras para aprovação de viagens</h3>
        <ul>
          <li>As solicitações podem ser feitas a qualquer tempo.</li>
          <li>
            O processamento será feito no prazo de cinco dias úteis antes da
            data da viagem.
          </li>
          <li>
            Viagens solicitadas sem a devida antecedência serão processadas em
            até 1 dia útil e serão atendidas se houver recursos disponíveis.
          </li>
        </ul>

        <h3>Viagens prioritárias</h3>
        <p>
          As solicitações com essa marcação serão aprovadas automaticamente, se
          houver recursos disponíveis e não houver conflito com outras viagens
          já aprovadas.
        </p>
        <ul>
          <li>Eventos promovidos pelo IFE;</li>
          <li>
            Atividades que envolvam convocação de representante(s) do IFE;
          </li>
          <li>
            Aula de campo / prática prevista em Plano de Ensino e aprovada pelo
            colegiado do curso;
          </li>
          <li>Atividades que envolvam agendamento com órgãos externos;</li>
          <li>Acompanhamento de estágio;</li>
          <li>Ações de extensão com acompanhamento docente.</li>
        </ul>

        <h3>Critérios para desempate</h3>
        <p>Viagens com maior número de passageiros;</p>
      </div>

      <h4>Dados gerais sobre viagem em veículos oficiais</h4>
      <div>
        <div className="center">
          <Image
            src={raioTransportes}
            width="1100"
            height="1100"
            alt="Atuação permitida do serviço de transportes: raio de 800 km à partir da sede - Juazeiro do Norte"
          ></Image>
        </div>
        Atenção: Atuação permitida do serviço de transporte terrestre da UFCA:
        Raio de 800 km à partir da sede - Juazeiro do Norte
      </div>
    </>
  );
}
