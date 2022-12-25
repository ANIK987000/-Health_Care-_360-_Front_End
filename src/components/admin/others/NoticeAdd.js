import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";


const NoticeAdd=()=>{


    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[startDate,setStartDate] = useState("");
    const[endDate,setEndDate] = useState("");
    const navigate = useNavigate();
    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");


    const[errT,setTitleErr] = useState("");
    const[errD,setDescriptionErr] = useState("");
    const[errS,setStartDateErr] = useState("");
    const[errE,setEndDateErr] = useState("");
 

    const handleForm=(event)=>{
        event.preventDefault();
        // setName('');
        // setMail('');
        // setPass('');
        // setPhn('');
        // setAdd('');
        // setMsg('');
        // setErr('');

        var data = {Title:title,Description:description,StartDate:startDate,EndDate:endDate};
        axios.post("https://localhost:44326/api/notice/add",data)
        .then((rsp)=>{
            //setMsg(rsp.data.msg);
            if(rsp.status==200)
            {
                swal("Success","Notice added successfully","success");
            }
            setErr(rsp.data);
            //debugger;
        },(err)=>{
            if(err.response.status==400)
            {
                if(err.response.data.ModelState["noticeBoardDTO.Title"])
                {
                    setTitleErr(err.response.data.ModelState["noticeBoardDTO.Title"][0]);
                }
                else
                {
                    setTitleErr();
                }
                if(err.response.data.ModelState["noticeBoardDTO.Description"])
                {
                    setDescriptionErr(err.response.data.ModelState["noticeBoardDTO.Description"][0]);
                }
                else
                {
                    setDescriptionErr();
                }
                if(err.response.data.ModelState["noticeBoardDTO.StartDate"])
                {
                    setStartDateErr("*Start Date cannot be empty");
                }
                else
                {
                    setStartDateErr();
                }
                if(err.response.data.ModelState["noticeBoardDTO.EndDate"])
                {
                    setEndDateErr("*End Date cannot be empty");
                }
                else
                {
                    setEndDateErr();
                }
                
             
               
              

            }
            else
            {
                setMsg("Server Error Occured");
            }
            //debugger;
        })
   
        
    }
        //___________________________________________________






    return (
        <div>
                <Sidebar></Sidebar>
                <Topbar></Topbar>


                <div class="content">
                
                     <div class="title">
                        <h2>Add A Notice</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>Title</label><br />
                          <input type="text" name="title" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                          <span class="text-danger">{errT}</span><br/>
                          
                         
                          
                          <label>Description</label><br/>
                          <input type="text" name="description" id="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                          <span class="text-danger">{errD}</span><br/>
                          
                          <label>Start Date</label><br/>
                          <input type="date" name="startDate" id="startDate" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}/>
                          <span class="text-danger">{errS}</span><br/>
                          
                          <label>End Date</label><br/>
                          <input type="date" name="endDate" id="endDate" value={endDate} onChange={(e)=>{setEndDate(e.target.value)}} />
                          <span class="text-danger">{errE}</span><br/>

                         
                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/notice/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link>

                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default NoticeAdd;