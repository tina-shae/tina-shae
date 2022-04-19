import {useState} from "react";
import styles from "./LeftNavBar.module.css";
import avatarImg from "../../../assets/avatar1.svg";
import logoImg from "../../../assets/logo-svg.svg";
import homeIcon from "../../../assets/home-icon.svg";
import usersIcon from "../../../assets/users-icon.svg";
import mailIcon from "../../../assets/mail-icon.svg";
import playIcon from "../../../assets/playicon.svg";
import chartIcon from "../../../assets/chart-icon.svg";
import settingsIcon from "../../../assets/settings-icon.svg";
import secondIcon from "../../../assets/second-icon.svg";

export default function LeftNavBar() {

  const [toggle, setToggle] = useState(false);



  return (
<div><div className={styles.header}>
<div className={styles.headerIcon}>
<img src={logoImg} alt="logo" />
</div>
<div className={styles.toogle}>
<button className={`${styles.togglebutton} ${toggle? styles.active:""}`} onClick={() => setToggle(!toggle)}>
    <div className={styles.togglebuttonline} />
    <div className={styles.togglebuttonline} />
    <div className={styles.togglebuttonline} />
  </button>
</div>

    </div>
      <aside className={`${styles.sidebar} ${toggle? styles.show:""}`}>
        <div className={styles.sidebarContainer}>
<div className={styles.sidebarIcon}>
<img src={logoImg} alt="logo" />
</div>

          <div className={styles.profileDetails}>
            <div className={styles.profileImage}>
              <img src={avatarImg} alt="avatar" />
            </div>
            <p className={styles.userName}>Jane Doe</p>
          
          </div>

          <nav className={styles.sidebarLinks}>
            <ul>
                <li className={styles.linkitem}><span></span><a href=""><img src={homeIcon}/></a></li>
                <li className={styles.linkitem}><span></span><a href=""><img src={secondIcon}/></a></li>
                <li className={styles.linkitem}><span></span><a href=""><img src={usersIcon}/></a></li>
                <li className={styles.linkitem}><span></span><a href=""><img src={mailIcon}/></a></li>
                <li className={styles.linkitem}><span></span><a href=""><img src={playIcon}/></a></li>
                <li className={styles.linkitem}><span></span><a href=""><img src={chartIcon}/></a></li>
                <li className={styles.linkitem}><span></span><a href=""><img src={settingsIcon}/></a></li>
            </ul>
          </nav>


        </div>
      </aside>
      </div>
    
  );
}

