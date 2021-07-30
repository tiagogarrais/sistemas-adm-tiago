import conexaoFuturo from '../src/assets/images/conexaoFuturo.png'
import falaAi from '../src/assets/images/falaAi.jpg'
import relatorios from '../src/assets/images/relatorios.png'
import telaIfeAdm from '../src/assets/images/telaIfeAdm.png'
import Image from 'next/image'

export default function OutrosSistemas() {
    return (

        <div className='outros-sistemas'>
            <h2>Outros sistemas</h2>
            <a href='http://ifeadm.16mb.com/'
                target='_blank'
                rel='noreferrer'
            >
                <button>Site ADM</button>
                <br />

                <Image
                    src={telaIfeAdm}
                    alt="Tela do site IFEADM"
                    width={400}
                    height={200}
                />
            </a>

            <a href='http://ifeadm.16mb.com/relatoriosadmufca/ifeadm/'
                target='_blank'
                rel='noreferrer'
            >
                <button>Relatórios UFCA Brejo Santo</button>
                <br />

                <Image
                    src={relatorios}
                    alt="Tela do site IFEADM"
                    width={400}
                    height={200}
                />
            </a>


            <a href='https://www.conexaofuturo.com.br/'
                target='_blank'
                rel='noreferrer'
            >
                <button>Plataforma de cursos e treinamentos</button>
                <br />

                <Image
                    src={conexaoFuturo}
                    alt="Tela do site IFEADM"
                    width={400}
                    height={200}
                />
            </a>



            <a href='https://github.com/tiagogarrais/FalaAi'
                target='_blank'
                rel='noreferrer'
            >
                <button>Aplicativo para Android - FalaAí</button>
                <br />

                <Image
                    src={falaAi}
                    alt="Tela do site IFEADM"
                    width={400}
                    height={200}
                />
            </a>

        </div>
    )
}