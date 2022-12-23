import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import TopBox from "../main/HTML/TopBox";
import TopMenu from "../main/TopMenu";

import {useState,useEffect} from 'react';
import axios from 'axios';



const Dashboard=()=>{

    const [doctor,setDoctor] = useState("");
    const [patient,setPatient] = useState("");
    const [staff,setStaff] = useState("");
    useEffect(()=>{
        axios.get("https://localhost:44326/api/all/list/count")
        .then((rsp)=>{
            setDoctor(rsp.data[0]);
            setPatient(rsp.data[1]);
            setStaff(rsp.data[2]);
            
            console.log(rsp.data[0]);
            console.log(rsp.data[1]);
            console.log(rsp.data[2]);
        },(err)=>{

        }) 
    },[]);


    return(
        <div>

            <Sidebar/>
            <Topbar/>
            
            <div class="content">
                <div class="cards">
                        <div class="card">
                            <div class="box">
                                <h1>{doctor}</h1>
                                <h3>Doctors</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="students.png" alt=""> */}
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>{patient}</h1>
                                <h3>Patients</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="teachers.png" alt=""> */}
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>{staff}</h1>
                                <h3>Staffs</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="schools.png" alt=""> */}
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>350000</h1>
                                <h3>Income</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="" alt=""> */}
                            </div>
                        </div>


                        
                </div>
            </div>

                   
        </div>
    )
}
export default Dashboard;