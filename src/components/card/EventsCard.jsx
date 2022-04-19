
import styles from "./EventsCard.module.css";
import clockIcon from "../../assets/clock-svg.svg";
import avatarImg from "../../assets/Avatar2.svg";
import locationIcon from "../../assets/location-point.svg";



const EventsCard= ({subject, activity, time, location, person,theme}) =>(
    <div className={`${styles.eventsCard} ${theme==='green'? styles.green:""} ${theme==='purple'? styles.purple:""} ${theme==='yellow'? styles.yellow:""} `}>
        <div className={styles.eventDetails}>
            <div className={styles.eventsubject}>{subject}</div>
            <div className={styles.eventactivity}>{activity}</div>
            {time !=="" &&  <div className={styles.eventtime}><div className={styles.clockicon}><img src={clockIcon}/> </div> <div className={styles.time}><p>{time}</p></div> </div>}
           { location !=="" &&  <div className={styles.eventtime}><div className={styles.locationIcon}><img src={locationIcon}/> </div> <div className={styles.location}><p>{location}</p></div> </div>}
            <div className={styles.eventuser}><div className={styles.avatar}><img src={avatarImg}/> </div> <div className={styles.name}>{person}</div></div>

        </div>
    
   </div>
  )
  export default EventsCard;