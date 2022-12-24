import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";

const NoticeUpdate=()=>{
    const params = useParams();
    const [notice,setNotice] = useState({});


    useEffect(()=>{
        axios.get(`https://localhost:44326/api/notice/${params.ID}`)
        .then((rsp)=>{
            setNotice(rsp.data);
            setID(rsp.data.ID);
            setTitle(rsp.data.Title);
            setDescription(rsp.data.Description);
            setStartDate(rsp.data.StartDate);
            setEndDate(rsp.data.EndDate);
            
            //console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const navigate = useNavigate();
    const[n_id,setID] = useState("");
    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[startDate,setStartDate] = useState("");
    const[endDate,setEndDate] = useState("");
    const[msg,setMsg]=useState("");

   //________________________________________________________________________________________________

    const[err,setErr] = useState("");

    const handleForm = (e) =>{
        e.preventDefault();


        var data = {ID:n_id,Title:title,Description:description,StartDate:startDate,EndDate:endDate};

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
               
                axios.post("https://localhost:44326/api/notice/update",data)
                .then((rsp)=>{
                    if (rsp.status == 200) {
                        //navigate('/seller/dashboard');
                        swal('Success', "Notice updated successfully", 'success')
                    } else if (rsp.status == 422) {
                        setErr(rsp.data.errors)
                        thisClicked.innerText = "Update";
                    }
                })
                
            } else {
                swal("Notice is not Updated");
                thisClicked.innerText = "Update";
                
            }
        });

    }
    return(
        <div>

                <Sidebar></Sidebar>
                <Topbar></Topbar>



                <div class="content">
                
                     <div class="title">
                        <h2>Update A Notice</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form>
                        <label> ID</label><br/>
                           <input  name="n_id" id="n_id" value={n_id} onChange={(e)=>{setID(e.target.value)}} disabled/><br/>
                           <label> Title</label><br/>
                           <input type="text" name="title" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                           <span>{err.title? err.title[0]:''}</span><br/>  

                           <label>Description</label><br/>
                           <input type="text" name="description" id="description" value={description }  onChange={(e)=>{setDescription(e.target.value)}} />
                           <span>{err.description? err.description[0]:''}</span><br/>   

                           <label>Start Date</label><br/>
                           <input type="date" name="startDate" id="startDate" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}} />
                           <span>{err.s_pass? err.s_pass[0]:''}</span><br/>  

                           <label>End Date</label><br/>
                           <input type="date" name="endDate" id="endDate"  value={endDate} onChange={(e)=>{setEndDate(e.target.value)}} />
                           <span>{err.endDate? err.endDate[0]:''}</span><br/>    

                           

                           <button type="button" class="btn btn-success" onClick={handleForm}>Edit</button>      
                           <Link to={"/notice/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link> 
                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default NoticeUpdate;