import {useState} from "react";
import menudashboard from "./Menubar.module.css"
import Bellactive from "../../Bellactive";
import pencentblue from "../../image/pencentblue.png"
import pencentgreen from "../../image/pencentgreen.png"
import pencentorange from "../../image/pencentorange.png"
import device_orange from "../../image/device_orange.svg" 
import service_blue from "../../image/service_blue.svg"
import level_green from "../../image/level_green.svg"
import DatePicker from 'sassy-datepicker';
function Menubar(){
        const [date, setDate] = useState(new Date());
        const onChange = newDate => {
        console.log(`New date selected - ${newDate.toString()}`);
        setDate(newDate);
    };
    //   window.process = {
    //     env: {
    //       NODE_ENV: 'development',
    //    },
    //  };
    return(
        <div className={menudashboard.dashboadright}>
            <div className={menudashboard.bell}>
                <Bellactive/>
            </div>
            <p className={menudashboard.title}>Tổng quan</p>            
            <div className={menudashboard.listcolurm}>
                <div className={menudashboard.listdevice}>
                    <div className={menudashboard.listdeviceleft}>
                        <img src={pencentorange} alt="pencentorange" className={menudashboard.pencentorange}></img>
                        <div className={menudashboard.listdevicemiddle}>
                            <p className={menudashboard.number}>4.221</p>
                            <div className={menudashboard.listdevicebottom}>
                                <img src={device_orange} alt="device_orange" className={menudashboard.pencentimg}></img>
                                <p className={menudashboard.listtitlebottom}>Thiết bị</p>
                            </div>
                        </div>
                    </div>
                    <div className={menudashboard.listdeviceright}>
                        <div className={menudashboard.listdevicertop}>
                            <div className={menudashboard.rowleft} style={{color:"orange"}} >.</div>
                            <div className={menudashboard.rowmiddle} >Đang hoạt động</div>
                            <div className={menudashboard.rowright} >3.799</div>
                        </div>
                        <div className={menudashboard.listdevicertop}>
                            <div className={menudashboard.rowleft} style={{color:"black"}}>.</div>
                            <div className={menudashboard.rowmiddle} >Ngưng hoạt động</div>
                            <div className={menudashboard.rowright} >422</div>
                        </div>
                    </div>
                </div>
                <div className={menudashboard.listdevice}>
                    <div className={menudashboard.listdeviceleft}>
                        <img src={pencentblue} alt="pencentblue" className={menudashboard.pencentblue}></img>
                        <div className={menudashboard.listdevicemiddle}>
                            <p className={menudashboard.number}>276</p>
                            <div className={menudashboard.listdevicebottom}>
                                <img src={service_blue} alt="service_blue" className={menudashboard.pencentimg}></img>
                                <p className={menudashboard.listtitlebottom} style={{color:"blue"}}>Dịch vụ</p>
                            </div>
                        </div>
                    </div>
                    <div className={menudashboard.listdeviceright}>
                        <div className={menudashboard.listdevicertop}>
                            <div className={menudashboard.rowleft} style={{color:"blue"}}>.</div>
                            <div className={menudashboard.rowmiddle} >Đang hoạt động</div>
                            <div className={menudashboard.rowright} >210</div>
                        </div>
                        <div className={menudashboard.listdevicertop}>
                            <div className={menudashboard.rowleft} style={{color:"black"}}>.</div>
                            <div className={menudashboard.rowmiddle} >Ngưng hoạt động</div>
                            <div className={menudashboard.rowright} >66</div>
                        </div>
                    </div>
                </div>
                <div className={menudashboard.listdevice}>
                    <div className={menudashboard.listdeviceleft}>
                        <img src={pencentgreen} alt="pencentgreen" className={menudashboard.pencentgreen}></img>
                        <div className={menudashboard.listdevicemiddle}>
                            <p className={menudashboard.number}>4.221</p>
                            <div className={menudashboard.listdevicebottom}>
                                <img src={level_green} alt="level_green" className={menudashboard.pencentimg}></img>
                                <p className={menudashboard.listtitlebottom} style={{color:"green"}}>Cấp số</p>
                            </div>
                        </div>
                    </div>
                    <div className={menudashboard.listdeviceright}>
                        <div className={menudashboard.listdevicertop}>
                            <div className={menudashboard.rowleft} style={{color:"green"}}>.</div>
                            <div className={menudashboard.rowmiddle} >Đã sử dụng  </div>
                            <div className={menudashboard.rowright} >3.721</div>
                        </div>
                        <div className={menudashboard.listdevicertop}>
                            <div className={menudashboard.rowleft} style={{color:"pink"}}>.</div>
                            <div className={menudashboard.rowmiddle} >Đang chờ</div>
                            <div className={menudashboard.rowright} >486</div>
                        </div>
                        
                        <div className={menudashboard.listdevicertop}>
                            <div className={menudashboard.rowleft} style={{color:"#F178B6"}}>.</div>
                            <div className={menudashboard.rowmiddle} >Bỏ qua</div>
                            <div className={menudashboard.rowright} >32</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={menudashboard.calendar}>
            <DatePicker className="Datapicker" onChange={onChange} selected={date} />
            </div>
        </div>
    )
}
export default Menubar;