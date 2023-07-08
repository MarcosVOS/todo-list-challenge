import styles from './Button.module.css'
import { PlusIcon } from './Icons/PlusIcon'

export function Button(){
    return(
    <button className={styles.button}>
        Criar 
        <PlusIcon/>
    </button>)
}