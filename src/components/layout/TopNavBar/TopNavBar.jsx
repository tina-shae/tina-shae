import styles from "./TopNavBar.module.css";
import notifyicon from "../../../assets/notify-svg.svg";
const  TopNavBar=()=> {
 

    return (
<div className={styles.topNav}>
  
<div className={styles.navItems}>  
<div className={styles.title}>Timeline</div>
<div className ={styles.dateChooser}><span className={styles.leftDate}><p className={styles.angleTag}>&#8249;</p></span>
<p className={styles.month} >Nov 02</p> 
<span className={styles.rightDate}><p className={styles.angleTag}>&#8250;</p></span></div>
<div className={styles.formDropDown}>

<div className={styles.dropdown}>
  
  <div className={styles.classDropdown}>
    <input type="text" placeholder="Sort by classes" className={styles.classinput}/>
    <div className={styles.dropdowncontent}>
    <a href="">A-Z</a>
    <a href="">Z-A</a>
  </div>
  </div>

  <div className={styles.weekDropdown}>
    <input type="text" placeholder="Week View" className={styles.weekinput}/>
    <div className={styles.dropdowncontent}>
    <a href="">Month View</a>
    <a href="">Year View</a>
  </div>

  </div>
  
</div>

<div className={styles.search}>
<input type="text" placeholder="    Search.." className={styles.searchInput}/>
</div>
    </div>
</div>
    <div className={styles.notifySec}>
    <a href=""><img src={notifyicon} className={styles.notifyIcon}/></a>

</div>

        </div>
    
);
}
export default TopNavBar;