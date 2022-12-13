import profile from '../Assest/img/profile.jpg';
import SideBarBUtton from './SideButton';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import AddToQueueTwoToneIcon from '@mui/icons-material/AddToQueueTwoTone';
import GamepadSharpIcon from '@mui/icons-material/GamepadSharp';
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

export default function SideBar(){
    return(
        <div className="side-bar-main">
                <li className="li-sizing">
                   <img className='sid-bar-profile' src={profile} />
                   <p className='side-bar-text'>Huzaifa Ahmed</p>
                </li>
                <SideBarBUtton tile='friends' icon={<PeopleOutlineTwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='Most Recent' icon={<LiveHelpTwoToneIcon  className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='Groups' icon={<Groups2TwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='MarketPlace' icon={<CottageTwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='watch' icon={<AddToQueueTwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='Games' icon={<GamepadSharpIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='Family Group' icon={<Diversity1SharpIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='Event Group' icon={<EventAvailableSharpIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='Language Change' icon={<LanguageSharpIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='watch' icon={<AddToQueueTwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='watch' icon={<AddToQueueTwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='watch' icon={<AddToQueueTwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='watch' icon={<AddToQueueTwoToneIcon className='side-bar-text-icon'/>}/>
                <SideBarBUtton tile='watch' icon={<AddToQueueTwoToneIcon className='side-bar-text-icon'/>}/>
        </div>
    )
}