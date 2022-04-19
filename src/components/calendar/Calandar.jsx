import React from 'react'
import styles from "./Calendar.module.css";

export default function Calendar () {

    
function getMonth()
{
    const firstDayOfTheMonth = new Date(2021, 6, 1).getDay()
    let currentMonthCount = 0- firstDayOfTheMonth
    const daysMatrix = new Array(5).fill([]).map(()=>{
       return new Array(7).fill(null).map(()=>{
            currentMonthCount++
            let curr=new Date(2021, 6, currentMonthCount)
            return curr
         })
    })
return daysMatrix
}
getMonth();

function getSelectDate(day){
        
    return day.toDateString() ===new Date(2021, 6, 2).toDateString()? styles.today:"";
}

function getEventDay(day)
{
    return day.toDateString() === new Date(2021, 6, 4).toDateString() ||day.toDateString() ===new Date(2021, 6, 11).toDateString()||day.toDateString() ===new Date(2021, 6, 13).toDateString()
    ||day.toDateString() ===new Date(2021, 6, 18).toDateString()||day.toDateString() ===new Date(2021, 6, 25).toDateString()|| day.toDateString() ===new Date(2021, 6, 21).toDateString()? styles.eventday:"";
}

function getprevnextMonth(day)
{
  return day.getMonth() !==new Date(2021, 6, 2).getMonth()? styles.previousdays:"";
}




    return (<div className={styles.calendarContainer}>
<div className={styles.todoList}>
<div className={styles.calendarday}>
    <div ><span className={styles.currentday}>02</span></div>
    <div className={styles.current}><p className={styles.month}>Nov</p>
    <p className={styles.year}>2021</p></div></div>
<div className={styles.todotext}><p>TO DO LIST</p></div>
<div className={styles.todotexttwo}><p>NOTES TO BE MADE</p></div>
<div className={styles.todotextthree}><p>DON'T FORGET ABOUT ACTIVITIES</p></div>

<div className={styles.scheduletext}><p>SCHEDULE</p></div>
<ul className={styles.activityList}>
    <li className={styles.ListItem}><p className={styles.time}>10:00 - 01:10</p> <p className={styles.event}>Event 3</p></li>
    <li className={styles.ListItem}><p className={styles.time}>02:00 - 05:00</p> <p className={styles.event}>Statistics</p></li>
    <li className={styles.ListItem}><p className={styles.time}>07:00 - 08:30</p> <p className={styles.event}>Biology</p></li>
    <li className={styles.ListItem}><p className={styles.time}>10:00 - 12:30</p> <p className={styles.event}>French</p></li>
</ul>
</div>
<div className={styles.calendar}>
<div className={styles.calendartext}><p> Calendar</p></div>
<div className={styles.months}>
    <div className={styles.previousNext}><p className={styles.month}>Oct</p><p className={styles.year}>2021</p></div>
    <div className={styles.currentMonth}><p className={styles.month}>Nov</p><p className={styles.year}>2021</p></div>
    <div className={styles.previousNext}><p className={styles.month}>Dec</p><p className={styles.year}>2021</p></div>
    </div>
<div className={styles.fullcalendar}>
<header className={styles.weekdayheader}>
  <div className={styles.daytext}>SUN</div>
  <div className={styles.daytext}>MON</div>
  <div className={styles.daytext}>TUE</div>
  <div className={styles.daytext}>WED</div>
  <div className={styles.daytext}>THU</div>
  <div className={styles.daytext}>FRI</div>
  <div className={styles.daytext}>SAT</div>
</header>
<div className={styles.days}>
{getMonth().map((row, i)=>(

<React.Fragment key={i}>
    {row.map((day,idx)=>(

<div   className={`${styles.cursorday} ${getSelectDate(day)} ${getEventDay(day)} ${getprevnextMonth(day)}`}>


<p className={styles.aligncenter}>{day.getDate() } </p>
</div>
    ))}

</React.Fragment> 
))}

</div>
</div>


</div>
   </div>
  )
;
    }