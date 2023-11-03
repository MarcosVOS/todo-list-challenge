import { ChangeEvent, TextareaHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  onAddTask?: (event: ChangeEvent<HTMLTextAreaElement>)=> void
  value: string
}

export function Input({value, onAddTask,...props}:InputProps){
  

  return(
    <>
      <textarea 
        className={styles.textarea} 
        placeholder='Adicione uma nova tarefa'
        value={value}
        onChange={onAddTask}
        required
        {...props}>
      </textarea>
    </>
  )
}