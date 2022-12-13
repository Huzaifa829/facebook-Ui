function Side_bar_option(props){
    const{icon,text}=props
    return(
        <li className='right-bar-main-oprion'>
            {icon}
            <p className='side-bar-option-text'>{text}</p>
        </li>
    )
}
export default Side_bar_option