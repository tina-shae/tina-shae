import SubjectsCard from "../../card/SubjectsCard";
import styles from "./Slider.module.css";
import subjectsIcon from "../../../assets/subjects-svg.svg";
import { subjectsData } from "../../../data";

const Slider= () =>(
  <div className={styles.Slider} >
    <div className={styles.header}>
      <div className={styles.headerText}>
Subjects
      </div>
      <div className={styles.headerIcon}>
        <img src={subjectsIcon}/>
        </div>
    </div>
    <div className={styles.breadcrum}>
    Upcoming Classes/Events
    </div>
    <div className={styles.subsjectsSlide}>



    {subjectsData.map((data, key) => {
          return (
            
              <SubjectsCard

                key={key}
                icon={data.icon}
              subject={data.name}
             theme={key%2 ===0? "orange": "blue"}
              />
           
          );
        })}

      <div className={styles.seemore}>
        <div className={styles.seemoreText}>
         <a href=""> See All <span className={styles.rightangle}>&#8250;</span> </a>
 </div>
 
      </div>
      </div>
 </div>
)
export default Slider;