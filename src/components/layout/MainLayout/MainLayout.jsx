import Slider from "../Slider/Slider";
import Calendar from "../../calendar/Calandar";
import styles from "./MainLayout.module.css";

const MainLayout= () =>(
  <div >
    
 <div className={styles.mainWrapper}>
 <Slider/>
 <Calendar/>
 </div>

 </div>
)
export default MainLayout;