import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';

const StaffList=()=>{

    const {id} = useParams();
    const [staffList,setStaffList] = useState([]);


    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/staff/list")
        .then((rsp)=>{
            setStaffList(rsp.data);
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
                                <th>Salary</th>

                              
                                </tr>
                                </thead>
                                    {
                                       
                                       staffList.map((staff)=>(
                             

                                                    <tr key={staff.Name}>
                                                   
                                                         <td>{staff.Name}</td>                   
                                                         <td>{staff.Email}</td>
                                                         <td>{staff.Phone}</td>
                                                         <td>{staff.Address}</td>
                                                         <td>{staff.Salary}</td>
              
                                                     
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
export default StaffList;