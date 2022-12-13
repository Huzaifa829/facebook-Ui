import imge from '../Assest/img/fb.png';
import profile from '../Assest/img/profile.jpg';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import NotificationsIcon from '@mui/icons-material/Notifications';
import YoutubeSearchedForSharpIcon from '@mui/icons-material/YoutubeSearchedForSharp';





export default function Navbar() {
    return (
        <div className="nav-div">
            <div className='nav-1st-div'>
                <div className='nav-2nd-div'>
                    <img className='fb-icon' src={imge} alt="" />
                </div>
                <input className='input-div' type="text" placeholder="Search FacebooK" />
            </div>
            <div className='icons-div'>
                <HomeIcon className='icon-sizing' />
                <OndemandVideoIcon className='icon-sizing' />
                <StoreIcon className='icon-sizing' />
                <GroupsIcon className='icon-sizing' />
                <SportsEsportsIcon className='icon-sizing' />

            </div>
            <div className='profile-div'>
                <div className='profile-icon' >
                    <WidgetsIcon className='profile-icon-style' />
                </div>
                <div className='profile-icon' >
                    <MarkunreadIcon className='profile-icon-style' />

                </div>
                <div className='profile-icon' >
                    <NotificationsIcon className='profile-icon-style' />

                </div>
                <div className='profile-icon' >
                    <img className='profile-sizing' src={profile} alt="" />

                </div>

            </div>
        </div>
    )
}