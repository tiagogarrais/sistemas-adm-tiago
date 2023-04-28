import Link from "next/dist/client/link"

export default function button(props) {
    return (
        <>
            <a
                target={'_blank'}>
                <button
                    className='botao-padrao'
                    style={{
                        width: '220px',
                        height: '40px',
                        borderRadius: '5px',
                        fontSize: '14px'
                    }}
                >
                    <Link
                        href={props.href}>
                        {props.nome}
                    </Link>
                </button>
            </a>
        </>
    )
}