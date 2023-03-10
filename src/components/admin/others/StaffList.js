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
    //const[d_qual,setQual] = useState("");
    const [search,setSearch] = useState("");
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

            <Sidebar/>
            {/* <Topbar3/> */}


            <div class="header">
                <div class="nav">
                    {/* <div class="qual">
                    <label>Qualification:</label>
                        <select name="d_qual" value={d_qual} onChange={(e)=>{setQual(e.target.value)}}>
                            <option value="">empty</option>
                            <option value="none">none</option>
                            <option value="Surgeon">Surgeon</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Orthopedist">Orthopedist</option>
                            <option value="Urologist">Urologist</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Orthodontist">Orthodontist</option>
                            <option value="Anesthesiologist">Anesthesiologist</option>
                            <option value="Cardiology physician">Cardiology physician</option>
                        </select>
                    </div> */}

                    <div class="search">
                        <input type="search"name="search" onChange={(e)=>{setSearch(e.target.value)}}    placeholder="Type here to search..."></input>
                        <button type="submit"></button>
                    </div>
                    <div class="user">
                        <a href="/staff/add" class="btnnn">Add New</a>
                        
                        <div class="img-case">
                               
                       
                        </div>
                    </div>
                </div>
            </div>

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
                                <th></th>
                                <th></th>
        
                                </tr>

                    {
                                staffList.filter((val)=>{
                                        
                                    if(search=="" )
                                    {
                                        return val;
                                    }
                                    else if(val.Name.toLowerCase().includes(search.toLowerCase()))
                                    {
                                        return val;
                                    }
                                     
                                })

                                
                                .map((val)=>{

                                    return(
                                       
                                        <tr key={val.Name}>
                                                   
                                        <td>{val.Name}</td>                   
                                        <td>{val.Email}</td>
                                        <td>{val.Phone}</td>
                                        <td>{val.Address}</td>
                                        <td>{val.Salary}</td>

                                        <td><button type="button" onClick={(e)=>DeleteStaff(e,val.ID)} class="btn btn-danger">Delete</button></td>
                                        <td><Link to={`/staff/update/${val.ID}`}><button type="button" class="btn btn-info">Edit</button></Link></td>
                                    
                                   </tr>

                                    
                                    )

                                })


                            }
                            </table>

                    </div>
                
                </div>



    )
}
export default StaffList;