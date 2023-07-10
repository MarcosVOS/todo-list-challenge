import { ButtonHTMLAttributes } from "react";
import  UncheckedIcon  from "../assets/UncheckedIcon.svg";
import styles from './Task.module.css'
import CheckedIcon  from "../assets/CheckedIcon.svg";

interface TaskProps {
    id: string,
    name: string,
    status: boolean
    key: string
    onDeleteTask: (Id: string)=> void
    onChangeStatusTask: (Id: string)=> void
}

export function Task({name,onDeleteTask, ...props}:TaskProps){
    return(
    <div key={props.key} className={props.status ?styles.taskContainer : styles.taskContainerDone}>

        <button onClick={()=>{props.onChangeStatusTask(props.id)}}>
            {props.status  ? <img src={CheckedIcon} alt="" /> : <img src={UncheckedIcon}></img>}
        </button>
        
        <span className={props.status ? styles.taskTextdone : styles.taskTextUndone }>{name}</span>
        <button onClick={()=>{ onDeleteTask(props.id) }}>
            <svg  className={styles.trashIcon} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.trashIconSVG} d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z" fill="#808080"/>
            <path className={styles.trashIconSVG}  d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z" fill="#808080"/>
            <path className={styles.trashIconSVG}  d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z" fill="#808080"/>
            </svg>
        </button>
    </div>)
}