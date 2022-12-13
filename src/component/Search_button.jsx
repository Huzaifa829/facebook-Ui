


function Search_button(props){
    const {icon,text}=props
    return(
        <div className="button-search-option">
            {icon}
            <p className='button-search-option-text'>{text}</p>
        </div>
    )
}
export default Search_button