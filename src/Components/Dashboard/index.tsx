import classes from './Dashboard.module.css'


import Chart from './Chart'
import Chartmonth from './Chartmonth'
import LevelChart from './LevelChart'
export default function Dashboad(prop:any) {
    return(
        <div className={classes.dashboad}>

         <div className={classes.dashboadmiddle}>
             <Chart/>
             <Chartmonth/>
             </div>   
            <LevelChart/>
        </div>
    )
}