import EventsCard from "../../card/EventsCard";
import styles from "./EventsBar.module.css";
import subjectsIcon from "../../../assets/subjects-svg.svg";
import { eventsCardData } from "../../../data";

const EventsBar= () =>(
    <div className={styles.eventBar} >
        <div className={styles.header}>
      <div className={styles.headerText}>
Events
      </div>
      <div className={styles.headerIcon}>
        <img src={subjectsIcon}/> <a href="">View All</a>
        </div>
    </div>
        

        <div className={styles.eventtabs}>
            <div className={styles.activites}>Activities</div> <div className={styles.reminders}>Reminders</div>
        </div>
        <div className={styles.eventbody}>

{eventsCardData.slice(0, 2).map((data, key) => {
          return (
           
              <EventsCard className={styles.card }
                key={key}
                subject={data.subject}
                activity={data.Activity}
                time={data.time}
                location ={data.location}
                person={data.person}
                theme= {key ===0? "green":"" ||key ===1? "purple":""||key ===2? "yellow":""}
              />
            
           
          );
        })}

        
        </div>
        <div className={styles.lastDay}>Last Day</div>

        {eventsCardData.filter((data, key)=>key>1).map((data, key) => {
          return (
           
              <EventsCard className={styles.card}
                key={key}
                subject={data.subject}
                activity={data.Activity}
                time={data.time}
                location ={data.location}
                person={data.person}
                theme= "yellow"
              />
            
           
          );
        })}

        <div className={styles.seeAll}><a href="">See All</a></div>
  
   </div>
  )
  export default EventsBar;