import management from './AccountManagement.module.css'
import Listitem from '../Listitem';
import Listaccount from './Listaccount';
function AccountManagement(){
    return(
        <div className={management.listaccount}>
            <Listitem/>
        <div className={management.listlevelright}>
            <Listaccount/>
            </div>
        </div>
    )   
}

export default AccountManagement;