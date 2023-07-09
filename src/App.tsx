import { LogoIcon } from "./components/Icons/LogoIcon"
import styles from './App.module.css'
import './global.css'
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import ClipboardIcon from "../src/components/Icons/Clipboard.svg";
import { Task } from "./components/Task"
import { ChangeEvent, useState } from "react"


interface Task {
  Id: string
  finished: boolean
  name: string
}

function App() {

  
  const [tasks, setTasks] = useState<Task[]>([])   

  const [inputFieldAddingTaskText, setInputFieldAddingTaskText] = useState<string>('')
  
  function HandleChangeInputFieldAddingTaskText(event: ChangeEvent<HTMLTextAreaElement>){
    setInputFieldAddingTaskText(event.target.value)
  }

  function HandleChangeAddTask(){
    const newTask : Task = {
      Id : `${tasks.length + 1}`,
      finished : false,
      name : inputFieldAddingTaskText,

    }
    setTasks([...tasks, newTask])
  }

  console.log(">>> inputFieldAddingTaskText: ",inputFieldAddingTaskText)
  let thereAreTasks = tasks.length > 0 

  return (
    <>
     <header className={styles.header}> 
      <LogoIcon/>
      <h1 className={styles.logoTo}>to</h1>
      <h1 className={styles.logoDo}>do</h1>
     </header>
     <main>
      <section className={styles.section}>
        <Input value={inputFieldAddingTaskText} onAddTask={HandleChangeInputFieldAddingTaskText}/>
        <Button text="Criar" onClick={HandleChangeAddTask}/>
      </section>
      <div className={styles.taskStatus}>
        <h6 className={styles.tasksCreated}>Tarefas criadas<span className={styles.taskCount}>0</span></h6>
        <h6 className={styles.tasksDone}>Concluídas<span className={styles.taskCount}>0</span></h6>
      </div>
      {thereAreTasks ?<div className={styles.taskContainer}>{tasks.map(task => {return <Task key={task.Id} name={task.name}/>} )}</div> : 
      <div className={styles.thereIsNoTask}>
        <img src={ClipboardIcon} alt="" />
        <span className={styles.thereIsNoTaskMessage}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>}
     </main>
    </>
  )
}

export default App
