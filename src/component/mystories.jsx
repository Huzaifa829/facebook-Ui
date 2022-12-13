import profile1 from '../Assest/img/profile1.jpg'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';

function Stories() {
    return (
        <div className="stories-main">
            <img className='stories-profile-image' src={profile1} alt="" />
            <div className='stories-main-text'>
                <AddCircleSharpIcon className='storie-icon'/>
                <p className='stiroe-text-icon'>Create story</p>
            </div>
        </div>
    )
}
export default Stories