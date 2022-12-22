import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import Topbar3 from "../main/HTML/Topbar3";

const StaffList=()=>{

    const {id} = useParams();
    const [staffList,setStaffList] = useState([]);
//__________________________________________________________


    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/staff/list")
        .then((rsp)=>{
            setStaffList(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

//____________________________________________________________


const DeleteStaff = (e, id)=>{
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this staff!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
            if (willDelete) {
                axios.post(`https://localhost:44326/api/staff/delete/${id}`)
                .then((rsp)=>{
                    if(rsp.status===200){
                        swal("Success","Staff deleted successfully", "success");
                        thisClicked.closest("tr").remove();
                    }
                    else {
                        swal("Success", "No staff found", "success")
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
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>StaffList</h4>
            <hr/>  */}

            <Sidebar/>
            <Topbar3/>

            <div class="content3">

                    <div class="title">
                        <h2>Staff List</h2>
                       
                    </div>
                
                                <table>

                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Salary</th>
        
                                </tr>

                                    {
                                       
                                       staffList.map((staff)=>(
                             

                                                    <tr key={staff.Name}>
                                                   
                                                         <td>{staff.Name}</td>                   
                                                         <td>{staff.Email}</td>
                                                         <td>{staff.Phone}</td>
                                                         <td>{staff.Address}</td>
                                                         <td>{staff.Salary}</td>
              
                                                         <td><button type="button" onClick={(e)=>DeleteStaff(e,staff.ID)} class="btn btn-danger">Delete</button></td>
                                                         <td><Link to={`/staff/update/${staff.ID}`}><button type="button" class="btn btn-info">Edit</button></Link></td>
                                                     
                                                    </tr>
                                           
                                               
                                        ))
                                    }
                                     
                               
                               </table>
                             

                    </div>
                
                </div>



    )
}
export default StaffList;