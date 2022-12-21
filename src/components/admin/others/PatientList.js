import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

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



    return(
        <div>
            <TopMenu/>
             <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>PatientList</h4>
            <hr/> 





            <div class="alert alert-success" role="alert">
                    {/* <b>{orderDeleted}</b> */}
            </div>

            <div class="container">
                <div class="row">
                    
                    <div class="col-sm-12">
                   
                
                                <table className="table table-striped bg-dark text-light">
                                <thead class="thead-dark">
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Dob</th>
                                <th>BloodGroup</th>
                                <th>Disease</th>

                                </tr>
                                </thead>
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
              
                                                     
                                                    </tr>
                                           
                                               
                                        ))
                                    }
                                     
                               
                               </table>
                             

                    </div>
                   
                </div>
            </div>


        </div>
    )
}
export default PatientList;