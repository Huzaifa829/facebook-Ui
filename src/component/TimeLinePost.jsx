import profile2 from '../Assest/img/profile1.jpg'
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import RecommendSharpIcon from '@mui/icons-material/RecommendSharp';
import Likes_Comment_Share_Icon from './LikeCommentIocon';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';


function TimeLinepost(props) {
    const {name,icon,image}=props
    return (
        <div className="timeline-post-div">
            <div className="timeline-profile-div-icon">
                <div className="timeline-icon-div">
                    <img className='timeline-icon-image' src={icon} alt="" />
                    <p className='timeline-image-icon-text'>{name}</p>
                    <div className='cut-icon-div'>
                        <MoreHorizSharpIcon className='timeline-cut-icon'/>
                    </div>
                    <div className='cut-icon-div'>
                        <CloseSharpIcon className='timeline-cut-icon'/>
                    </div>
                </div>
            </div>
            <img className='profile-image-scen' src={image} alt="" />
            <div className='end-div-like'>
                <div className='like-comment-share-div'>
                    <div className='likes-icon-text-div'>
                        <div className='likes-image-icon'>
                            <RecommendSharpIcon className='icon-iamge-setting'/>
                        </div>
                        <div className='likes-image-icon'>
                            <p className='icon-iamge-setting1'>2.5K</p>
                        </div>
                    </div>
                    <div className='comment-share-div'>
                        <div className='comment-num-div'>
                            <p className='comment-num-text'>1k comments</p>
                        </div>
                        <div className='comment-num-div'>
                            <p className='comment-num-text'>200 shares</p>
                        </div>
                    </div>
                </div>
                <div className='profile-like-comment-share-div'>
                    <Likes_Comment_Share_Icon icon={<ThumbUpSharpIcon className='icon-like-give'/>} name='Likes'/>
                    <Likes_Comment_Share_Icon icon={<ChatBubbleOutlineSharpIcon className='icon-like-give'/>} name='Comment'/>
                    <Likes_Comment_Share_Icon icon={<ShareSharpIcon className='icon-like-give'/>} name='share'/>
                </div>
            </div>
        </div>
    )
}
export default TimeLinepost