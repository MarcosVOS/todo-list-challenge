import { TrashIcon } from "./Icons/TrashIcon";
import { UncheckedIcon } from "./Icons/UncheckedIcon";

import styles from './Task.module.css'

export function Task(){
    return(
    <div className={styles.taskContainer}>
        <UncheckedIcon/>
        <span className={styles.taskText}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
        <TrashIcon/>
    </div>)
}