import management from './AccountManagement.module.css'
import Listaccount from './Listaccount';
function AccountManagement(){
    return(
        <div className={management.listaccount}>
            <div className={management.listlevelright}>
                <Listaccount/>
            </div>
        </div>
    )   
}

export default AccountManagement;