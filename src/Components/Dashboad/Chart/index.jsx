import styles from './Chart.module.css'
import  dashboadgreen from "../../image/dashboadgreen.png"
import  dashboadblue from "../../image/dashboadblue.png"
import  dashboadred  from "../../image/dashboadred.png"
import  dashboadorange from "../../image/dashboadorange.png"
import  goup from "../../image/goup.svg"
import  godown from "../../image/godown.svg"


function Chart(){
    return(
        <div className={styles.dashboadlist}>
            <div className={styles.dashboadmiddle}>
                <div className={styles.dashboadtitle}>
                    Dashboard
                </div>
                <div className={styles.levelchart}>
                    Biểu đồ cấp số
                </div>     
            <div className={styles.chart}>
                <div className={styles.dashboaditem}>
                    <div className={styles.itemtop}>
                        <img src={dashboadblue} alt="dashboadblue" className={dashboadblue}></img>
                        <p className={styles.itemtitle} >Số thứ tự đã cấp</p>
                    </div>
                    <div className={styles.itembottom}>
                        <h2 className={styles.itemnumber}>4.221</h2>
                        <div className={styles.itemnprecentup}>
                            <div className={styles.goup}>
                            <img src={goup} alt="goup" ></img>
                            </div>
                            <div className={styles.precent}>32.41%</div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboaditem}>
                    <div className={styles.itemtop}>
                        <img src={dashboadgreen} alt="dashboadgreen" className={dashboadgreen}></img>
                        <p className={styles.itemtitle}>Số thứ tự đã sử dụng</p>
                    </div>
                    <div className={styles.itembottom}>
                        <h2 className={styles.itemnumber}>3.721</h2>
                        <div className={styles.itemnprecentdown}>
                            <div className={styles.goup}>
                            <img src={godown} alt="godown" ></img>
                            </div>
                            <div className={styles.precent}>32.41%</div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboaditem}>
                    <div className={styles.itemtop}>
                        <img src={dashboadorange} alt="dashboadorange" className={dashboadorange}></img>
                        <p className={styles.itemtitle} >Số thứ tự đang chờ</p>
                    </div>
                    <div className={styles.itembottom}>
                        <h2 className={styles.itemnumber}>468</h2>
                        <div className={styles.itemnprecentup}>
                            <div className={styles.goup}>
                            <img src={goup} alt="goup" ></img>
                            </div>
                            <div className={styles.precent}>56,41%</div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboaditem}>
                    <div className={styles.itemtop}>
                        <img src={dashboadred} alt="dashboadred" className={dashboadred}></img>
                        <p className={styles.itemtitle} >Số thứ tự đã bỏ qua</p>
                    </div>
                    <div className={styles.itembottom}>
                        <h2 className={styles.itemnumber}>32</h2>
                        <div className={styles.itemnprecentdown}>
                            <div className={styles.goup}>
                            <img src={godown} alt="godown" ></img>
                            </div>
                            <div className={styles.precent}>22,41%</div>
                        </div>
                    </div>
                </div>
            </div>                 
        </div>
    </div>
    )
}

export default Chart;