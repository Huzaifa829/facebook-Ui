import profile1 from '../Assest/img/profile1.jpg'
import Search_button from './Search_button'
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import PhotoSharpIcon from '@mui/icons-material/PhotoSharp';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';



function Post_bar(){
    return(
        <div className="post-bar-main-div">
            <div className="post-searchbar-div">
                <img className='postbar-profile-icon' src={profile1} />
                <input className='postbar-profile-search' type="text" placeholder="What's your in your mind,Huzaifa" />
            </div>
            <div className='post-bar-main-option'>
                <Search_button icon={<VideoCallSharpIcon className='post-bar-icon-setting red-colour'/>} text="Live video"/>
                <Search_button icon={<PhotoSharpIcon className='post-bar-icon-setting green-colour'/>} text="Photos video"/>
                <Search_button icon={<InsertEmoticonSharpIcon className='post-bar-icon-setting yellow-colour'/>} text="Feeling/activity"/>
            </div>
        </div>
    )
}
export default Post_bar