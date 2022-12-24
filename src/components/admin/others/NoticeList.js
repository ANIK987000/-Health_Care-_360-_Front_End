import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import Topbar3 from "../main/HTML/Topbar3";

const NoticeList=()=>{

    const {id} = useParams();
    const [noticeList,setNoticeList] = useState([]);
    //const[d_qual,setQual] = useState("");
    const [search,setSearch] = useState("");
//__________________________________________________________


    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/notice/list")
        .then((rsp)=>{
            setNoticeList(rsp.data);
            console.log(rsp);
        },(err)=>{

        }) 
    },[]);

//____________________________________________________________


const DeleteNotice = (e, id)=>{
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this notice!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
            if (willDelete) {
                axios.post(`https://localhost:44326/api/notice/delete/${id}`)
                .then((rsp)=>{
                    if(rsp.status===200){
                        swal("Success","Notice deleted successfully", "success");
                        thisClicked.closest("tr").remove();
                    }
                    else {
                        swal("Success", "No notice found", "success")
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
                       
                        <input type="date"name="search" onChange={(e)=>{setSearch(e.target.value)}}    placeholder="Type here to search..."></input>
                        <button type="submit"></button>
                    </div>
                    <div class="user">
                        <a href="/notice/add" class="btnnn">Add New</a>
                        
                        <div class="img-case">
                               
                       
                        </div>
                    </div>
                </div>
            </div>

            <div class="content3">

                    <div class="title">
                        <h2>Notice List</h2>
                       
                    </div>
                    <table>

                                <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th></th>
                                <th></th>
        
                                </tr>

                    {
                                noticeList.filter((val)=>{
                                        
                                    if(search=="" )
                                    {
                                        return val;
                                    }
                                    else if(val.EndDate.toLowerCase().includes(search.toLowerCase()))
                                    {
                                        return val;
                                    }
                                     
                                })

                                
                                .map((val)=>{

                                    return(
                                       
                                        <tr key={val.Title}>
                                                   
                                        <td>{val.Title}</td>                   
                                        <td>{val.Description}</td>
                                        <td>{val.StartDate}</td>
                                        <td>{val.EndDate}</td>
                                       

                                        <td><button type="button" onClick={(e)=>DeleteNotice(e,val.ID)} class="btn btn-danger">Delete</button></td>
                                        <td><Link to={`/notice/update/${val.ID}`}><button type="button" class="btn btn-info">Edit</button></Link></td>
                                    
                                   </tr>

                                    
                                    )

                                })


                            }
                            </table>

                    </div>
                
                </div>



    )
}
export default NoticeList;