import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import TopBox from "../main/HTML/TopBox";
import TopMenu from "../main/TopMenu";



const Dashboard=()=>{
    return(
        <div>
             {/* <TopMenu/> */}
             
             {/* <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>Dashboard</h4>
            <hr/>  */}

            <Sidebar/>
            <Topbar/>
            <TopBox/>
        </div>
    )
}
export default Dashboard;