import styles from './Loading.module.css'
import loading from './loading.svg'

export default function Loading() {
  return (
    <div>
      <img src={loading} alt="Carregando..."></img>
    </div>
  )
}
