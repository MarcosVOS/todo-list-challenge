import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'
import { PlusIcon } from './Icons/PlusIcon'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}
export function Button({ text, ...props}:ButtonProps){
    return(
    <button className={styles.button} {...props}>
        {text}
        <PlusIcon/>
    </button>)
}