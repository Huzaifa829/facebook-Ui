import Timline_option from "./option-timeline"
import Postbar from "./postbar"
import Timeline_post from "./TimeLinePost" 
import profile1 from '../Assest/img/profile1.jpg'
import profile2  from '../Assest/img/imag1.jpg'
import profile3  from '../Assest/img/imag2.jpg'
import profile4  from '../Assest/img/imag3.jpg'
import profile5  from '../Assest/img/imag4.jpg'



export default function TimeLine(){
    return(
         <div className="time-line">
            <Timline_option/>
            <Postbar/>
            <Timeline_post name="Huzaifa Ahmed" icon={profile1} image={profile1}/>
            <Timeline_post name="Ali" icon={profile2} image={profile5}/>
            <Timeline_post name="Zain" icon={profile3} image={profile4}/>
            <Timeline_post name="Ahmed" icon={profile4} image={profile3}/>
            <Timeline_post name="Fazian" icon={profile5} image={profile2}/>
        </div>
    )
}