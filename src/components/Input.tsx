import styles from './Input.module.css'

export function Input(){
    return(<><textarea className={styles.textarea} placeholder='Adicione uma nova tarefa'></textarea></>)
}