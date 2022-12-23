import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import TopBox from "../main/HTML/TopBox";
import Topbar1 from "../main/HTML/Topbar1";

const DoctorList=()=>{

    const {id} = useParams();
    const [doctorList,setDoctorList] = useState([]);


    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/doctor/list")
        .then((rsp)=>{
            setDoctorList(rsp.data);
            console.log(rsp.data);
        },(err)=>{

        }) 
    },[]);

 //_____________________________________________________________________

    
 const DeleteDoctor = (e, id)=>{
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this doctor!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
            if (willDelete) {
                axios.post(`https://localhost:44326/api/doctor/delete/${id}`)
                .then((rsp)=>{
                    if(rsp.status===200){
                        swal("Success","Doctor deleted successfully", "success");
                        thisClicked.closest("tr").remove();
                    }
                    else {
                        swal("Success", "No doctor found", "success")
                        thisClicked.innerText = "Delete";
                    }
                },(err)=>{
                    debugger;
                });
                // thisClicked.closest("div").remove();
            } else {
                swal("Canceled!");
                thisClicked.innerText = "Delete";
            }
        });

    }


    //_____________________________________________________

    return(
        <div>
            {/* <TopMenu/>
             <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>DoctorList</h4>
            <hr/>  */}


            <Sidebar/>
            <Topbar1/>
            {/* <TopBox/> */}



            <div class="content1">

                    <div class="title">
                        <h2>Doctor List</h2>
                       
                    </div>




                    
                                <table>
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Qualification</th>
                                <th>VisitingHours</th>
                                <th>AppointmentFee</th>
                                <th></th>
                                <th></th>

                                </tr>
                
                                    {
                                       
                                       doctorList.map((doctor)=>(
                             

                                                    <tr key={doctor.Name}>
                                                   
                                                         <td>{doctor.Name}</td>                   
                                                         <td>{doctor.Email}</td>
                                                         <td>{doctor.Phone}</td>
                                                         <td>{doctor.Address}</td>
                                                         <td>{doctor.Qualification}</td>
                                                         <td>{doctor.VisitingHours}</td>
                                                         <td>{doctor.AppointmentFee}</td>
                                                         <td><button type="button" onClick={(e)=>DeleteDoctor(e,doctor.ID)} class="btn btn-danger">Delete</button></td>
                                                         <td><Link to={`/doctor/update/${doctor.ID}`}><button type="button" class="btn btn-info">Edit</button></Link></td>
                                                     
                                                    </tr>
                                           
                                               
                                        ))
                                    }
                                     
                               
                               </table>
                             
                          
             
            </div>


        </div>
    )
}
export default DoctorList;