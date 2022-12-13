import Navbar from "../component/navbar"
import SideBar from "../component/sidebar"
import TimeLine  from "../component/Timeline"
import Right_sideBar from "../component/Right_sidebar"

export default function Home() {
    return (
        <div className="jabba-123">
            <Navbar />
                <ul className="silde-bar-width">
                    <SideBar />
                </ul>
            <div className="sidebar-timline-seeting">
            <TimeLine/>
            </div>
            <ul className="last-option-memu">
                <Right_sideBar/>
                <Right_sideBar/>
                <Right_sideBar/>
            </ul>
        </div>
    )
}