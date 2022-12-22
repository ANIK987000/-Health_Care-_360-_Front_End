import "../CSS/Style.css";
import {Link, useParams} from 'react-router-dom';

const Sidebar=()=>{
    return(
        <div>
             <div class="side-menu">
        <div class="brand-name">
            <h1>HC360</h1>
        </div>
        <ul>
            <li>  <Link to={"/dashboard"}><span>Dashboard</span></Link> </li>
            <li> <Link to={"/doctor/list"}><span>Doctor</span></Link> </li>
            <li> <Link to={"/patient/list"}><span>Patient</span></Link> </li>
            <li> <Link to={"/staff/list"}><span>Staff</span></Link> </li>
            <li><span>Income</span> </li>
            <li><span>Help</span></li>
            <li><span>Settings</span> </li>
        </ul>
    </div>
        </div>
    )
}
export default Sidebar;