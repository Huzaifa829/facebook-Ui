







function TotalstOries(props){
    const {profile,icon_profile}=props
    return(
        <div className="stories-main">
            <div className="profile-icon-on-story">
                <img className='profile-icon-image-onstory' src={icon_profile} alt="" />
            </div>
            {/* <img className='profile-icon-image' src={profile} alt="" /> */}
        </div>
    )
}
export default TotalstOries