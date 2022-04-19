import styles from "./SubjectsCard.module.css";
import SquareRoot from "../../assets/square-root.svg";

const SubjectsCard= ({icon, subject, theme}) =>(
    <div className={`${styles.Card} ${theme==='blue'? styles.blue:""} ${theme==='orange'? styles.orange:""} `}>
        <div className={styles.ClassIcon}>
            <img src={icon}/>
        </div>
        <div className={styles.ClassName}>
        {subject}
        </div>
  
   </div>
  )
  export default SubjectsCard;