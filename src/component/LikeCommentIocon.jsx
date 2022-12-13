function Likes_Comment_Share_Icon(props){
    const{name,icon}=props
    return(
        <div className="profile-like-main-div">
            {icon}
            <p className='like-icon-setting'>{name}</p>
        </div>
    )
}

export default Likes_Comment_Share_Icon