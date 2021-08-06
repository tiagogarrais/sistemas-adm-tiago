import Link from "next/dist/client/link"

export default function BotaoPadrao(props) {
    return (
        <>
            <button
            className='botao-padrao'
            style={{width:'200px', height:'50px', borderRadius:'5px'}}
            >
                <Link href={props.href}>
                    {props.nome}
                </Link>
            </button>
        </>
    )
}