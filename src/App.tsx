import { LogoIcon } from "./components/Icons/LogoIcon"
import styles from './App.module.css'
import './global.css'
import { Input } from "./components/Input"
import { Button } from "./components/Button"

function App() {
  return (
    <>
     <header className={styles.header}> 
      <LogoIcon/>
      <h1 className={styles.logoTo}>to</h1>
      <h1 className={styles.logoDo}>do</h1>
     </header>
     <main >
      <section className={styles.section}>
        <Input/>
        <Button/>
      </section>
     </main>
    </>
  )
}

export default App
