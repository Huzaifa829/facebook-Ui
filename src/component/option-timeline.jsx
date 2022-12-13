import AutoStoriesTwoToneIcon from '@mui/icons-material/AutoStoriesTwoTone';
import GroupWorkTwoToneIcon from '@mui/icons-material/GroupWorkTwoTone';
import EmergencyRecordingTwoToneIcon from '@mui/icons-material/EmergencyRecordingTwoTone';
import Stories from './mystories';
import TotalstOries from './Totalstories';
import profile1 from '../Assest/img/profile1.jpg'


function Timline_option(){
    return(
        <div className='timr-line-stories'>
        <div className="time-line-option-div">
        <div className="time-line-option-button">
            <div className="time-line-option-icon-div"> 
                <AutoStoriesTwoToneIcon className='time-line-option-icon-color'/>
            </div>
            <div className="time-line-option-icon-text">
                <p className='time-line-option-icon-font'>Stories</p>
            </div>
        </div>
        <div className="time-line-option-button">
            <div className="time-line-option-icon-div">
                <GroupWorkTwoToneIcon className='time-line-option-icon-color'/>
            </div>
            <div className="time-line-option-icon-text">
                <p className='time-line-option-icon-font'>Reels</p>
            </div>
        </div>
        <div className="time-line-option-button">
            <div className="time-line-option-icon-div">
                <EmergencyRecordingTwoToneIcon className='time-line-option-icon-color'/>
            </div>
            <div className="time-line-option-icon-text">
                <p className='time-line-option-icon-font'>Room</p>
            </div>
        </div> 
    </div>
    <div className='stories-div'>
        <Stories/>
        <TotalstOries icon_profile={profile1} profile={profile1} />
        <TotalstOries icon_profile={profile1} profile={profile1} />
        <TotalstOries icon_profile={profile1} profile={profile1} />
    </div>
    </div>

    )
}
export default Timline_option