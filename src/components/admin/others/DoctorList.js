import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

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



    return(
        <div>
            <TopMenu/>
             <hr/>
            <h4 style={{textAlign:"center",fontFamily: "myFirstFont"}}>DoctorList</h4>
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
                                <th>Qualification</th>
                                <th>VisitingHours</th>
                                <th>AppointmentFee</th>
                                </tr>
                                </thead>
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
export default DoctorList;