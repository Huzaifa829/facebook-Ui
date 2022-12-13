import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import Side_bar_option from './SidebarOpation';
import SwitchAccountSharpIcon from '@mui/icons-material/SwitchAccountSharp';
import CampaignSharpIcon from '@mui/icons-material/CampaignSharp';


function Right_sideBar(){
    return(
        <div className='hello-frnds'>
        <li className="right-bar-main">
            <p className='right-bar-text'>Your Pages and profiles</p>
            <MoreHorizSharpIcon className='right-bar-text-icon'/>
        </li>
        <Side_bar_option text='messege' icon={<MailOutlineSharpIcon className='side-bar-option-icon'/>}/>
        <Side_bar_option text='Switch Into Page' icon={<SwitchAccountSharpIcon className='side-bar-option-icon'/>}/>
        <Side_bar_option text='Create Promotion' icon={<CampaignSharpIcon className='side-bar-option-icon'/>}/>
        </div>
    )
}
export default Right_sideBar