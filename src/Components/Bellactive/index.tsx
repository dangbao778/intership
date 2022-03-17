import bellnotify from './Bellactive.module.css'
import bell from "../image/bell.png"
import bellActive from "../image/bellActive.png"
import {useState} from "react"
import avata from "../image/avata.svg"
function Bellactive(){
    const [isShow, setIsShow] = useState(false);
    return(
    <div className={bellnotify.bellactive}>
        <p 
                    onMouseEnter={()=>setIsShow(true)} 
                    > <img src ={isShow ? bellActive : bell} alt="bell" className={bellnotify.bell}></img> 
        </p>

        { isShow &&    <div className={bellnotify.notify}
            
            onMouseLeave={()=>setIsShow(false)}>
                    <header className={bellnotify.notifyheader}>
                            <p className={bellnotify.notifytitle}>Thông báo </p>
                    </header>
                    <div className={bellnotify.notifylist}>
                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Nguyễn Thị Thùy Dung</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>


                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Nguyễn Thiên Chinh</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>

                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Võ Thị Kim Liên</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>


                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Hoàng Nguyễn Quốc Huy</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>

                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Võ Ngọc Lan Anh</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>

                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>

                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>

                        <div className={bellnotify.notifylink}>
                            <a href="#"> 
                                <p className={bellnotify.notifyname}>Người dùng: Nguyễn Thị Trúc Anh</p>
                                <p className={bellnotify.notifytime}>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </a>
                        </div>

                    </div>
            </div>
        }
        <div className={bellnotify.dashboadavata}>
            <img src={avata} alt="avata" ></img>
        </div>
        <div className={bellnotify.dashboaditemtitle}>
            <p className={bellnotify.dashboaditemtop}>Xin chào </p>
            <p className={bellnotify.dashboaditembottom}>Lê Quỳnh Ái Vân </p>
        </div>               
    </div>
    )
}

export default Bellactive;