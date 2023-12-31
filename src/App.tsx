import styles from './App.module.css'
import './global.css'
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import ClipboardIcon from "../src/assets/ClipboardIcon.svg";
import { Task } from "./components/Task"
import { ChangeEvent, useState } from "react"
import LogoIcon from './assets/LogoIcon.svg'


interface Task {
  id: string
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
    event?.preventDefault()
    const newTask : Task = {
      id : `${tasks.length + 1}`,
      finished : false,
      name : inputFieldAddingTaskText,

    }
    setTasks([...tasks, newTask])
    setInputFieldAddingTaskText('')
  }

  function HandleChangeDeleteTask(taskId: string){
    setTasks(tasks.filter(task => task.id != taskId))
  }

  function HandleChangeStatusTask(taskId: string){
    const newStatus = tasks.map(task=>{
      if(task.id == taskId){
        task.finished = !task.finished
      }
      return task
    })
    setTasks(newStatus)
  }


  const thereAreTasks = tasks.length > 0 
  const createdTasks = tasks.length
  const taskDone = tasks.reduce((accumulator: number, task: Task) => {
    if (task.finished === true) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);

  const taskNotDone  = tasks.reduce((accumulator: number, task: Task)=>{
    if(task.finished == false){
      return accumulator + 1
    }else {
      return accumulator
    }
  },0)
  

  return (
    <>
     <header className={styles.header}> 
      <img src={LogoIcon} alt='Icone logo'></img>
      <h1 className={styles.logoTo}>to</h1>
      <h1 className={styles.logoDo}>do</h1>
     </header>
     <main>
        <form className={styles.section} onSubmit={HandleChangeAddTask}>
          <Input value={inputFieldAddingTaskText} onAddTask={HandleChangeInputFieldAddingTaskText}/>
          <Button text="Criar" type="submit" />
        </form>
        <div className={styles.taskStatus}>
          <h6 className={styles.tasksCreated}>Tarefas criadas<span className={styles.taskCount}>{createdTasks}</span></h6>
          <h6 className={styles.tasksDone}>Concluídas<span className={styles.taskCount}>{taskDone} de {taskNotDone}</span></h6>
        </div> 
      {thereAreTasks ?
        <div className={styles.taskContainer}>
          {tasks.map(task => {
            return <Task 
              onDeleteTask={HandleChangeDeleteTask} 
              onChangeStatusTask={HandleChangeStatusTask} 
              status={task.finished}
              key={task.id}
              id={task.id}
              name={task.name}
            />
          })}
        </div> : 
        <div className={styles.thereIsNoTask}>
          <img src={ClipboardIcon} alt="Icone de prancheta" />
          <span className={styles.thereIsNoTaskMessage}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </span>
        </div>
      }
     </main>
    </>
  )
}

export default App
