import { LogoIcon } from "./components/Icons/LogoIcon"
import styles from './App.module.css'
import './global.css'
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import ClipboardIcon from "../src/components/Icons/Clipboard.svg";
import { Task } from "./components/Task"


function App() {

  let thereAreTasks = true 
  return (
    <>
     <header className={styles.header}> 
      <LogoIcon/>
      <h1 className={styles.logoTo}>to</h1>
      <h1 className={styles.logoDo}>do</h1>
     </header>
     <main>
      <section className={styles.section}>
        <Input/>
        <Button/>
      </section>
      <div className={styles.taskStatus}>
        <h6 className={styles.tasksCreated}>Tarefas criadas<span className={styles.taskCount}>0</span></h6>
        <h6 className={styles.tasksDone}>Concluídas<span className={styles.taskCount}>0</span></h6>
      </div>
      {thereAreTasks ?<div className={styles.taskContainer}><Task/></div> : 
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
