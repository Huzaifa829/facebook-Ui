

export default function SideBarBUtton(props){
    const {tile,icon}=props
    return(<li className="li-sizing">
    {icon}
   <p className='side-bar-text'>{tile}</p>
</li>)
}