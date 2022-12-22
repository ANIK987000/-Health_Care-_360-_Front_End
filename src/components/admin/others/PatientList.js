import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import Topbar2 from "../main/HTML/Topbar2";

const PatientList=()=>{

    const {id} = useParams();
    const [patientList,setPatientList] = useState([]);


    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/patient/list")
        .then((rsp)=>{
            setPatientList(rsp.data);
            console.log(rsp.data);
        },(err)=>{

        }) 
    },[]);

    //_____________________________________________________________________

    
const DeletePatient = (e, id)=>{
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this patient!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
            if (willDelete) {
                axios.post(`https://localhost:44326/api/patient/delete/${id}`)
                .then((rsp)=>{
                    if(rsp.status===200){
                        swal("Success","Patient deleted successfully", "success");
                        thisClicked.closest("tr").remove();
                    }
                    else {
                        swal("Success", "No patient found", "success")
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
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>PatientList</h4>
            <hr/>  */}

            <Sidebar/>
            <Topbar2/>

            <div class="content2">

                                <div class="title">
                                    <h2>Patient List</h2>
                                
                                </div>
                                                
                
                                <table>
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Dob</th>
                                <th>BloodGroup</th>
                                <th>Disease</th>

                                </tr>
                                    {
                                       
                                       patientList.map((patient)=>(
                             

                                                    <tr key={patient.Name}>
                                                   
                                                         <td>{patient.Name}</td>                   
                                                         <td>{patient.Email}</td>
                                                         <td>{patient.Phone}</td>
                                                         <td>{patient.Address}</td>
                                                         <td>{patient.Dob}</td>
                                                         <td>{patient.BloodGroup}</td>
                                                         <td>{patient.Disease}</td>
                                                         <td><button type="button" onClick={(e)=>DeletePatient(e,patient.ID)} class="btn btn-danger">Delete</button></td>
                                                         <td><Link to={`/patient/update/${patient.ID}`}><button type="button" class="btn btn-info">Edit</button></Link></td>
                                                    </tr>
                                           
                                               
                                        ))
                                    }
                                     
                               
                               </table>
                             

              
                   
    
            </div>


        </div>
    )
}
export default PatientList;