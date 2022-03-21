import device_style from "./Device.module.css"
import Listitem from '../Listitem'
import Listdevice from './Listdevice'
function Device(){
    return(
        <div className={device_style.listlevel}>
            <div className={device_style.listlevelright}>
                <Listdevice/>
            </div>
        </div>
    )
}
export default Device;