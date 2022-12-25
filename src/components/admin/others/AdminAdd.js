import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";


const AdminAdd=()=>{


    const[name,setName] = useState("");
    const[phn,setPhn] = useState("");
    const[mail,setMail] = useState("");
    const[pass,setPass] = useState("");
    const[add,setAdd] = useState("");
    
    const navigate = useNavigate();
    const[msg,setMsg] = useState("");
    const[errN,setNameErr] = useState("");
    const[errM,setMailErr] = useState("");
    const[errP,setPassErr] = useState("");
    const[errPH,setPhnErr] = useState("");
    const[errADD,setAddErr] = useState("");
    const[err,setErr] = useState("");


    const handleForm=(event)=>{
        event.preventDefault();
        // setName('');
        // setMail('');
        // setPass('');
        // setPhn('');
        // setAdd('');
        // setMsg('');
        // setErr('');

        var data = {Name:name,Email:mail,Password:pass,Phone:phn, Address:add};
        axios.post("https://localhost:44326/api/admin/add",data)
        .then((rsp)=>{
            //setMsg(rsp.data.msg);
            if(rsp.status==200)
            {
                swal("Success","Admin added successfully","success");
            }
            setErr(rsp.data);
            //debugger;
        },(err)=>{
            if(err.response.status==400)
            {
                if(err.response.data.ModelState["admin.Name"])
                {
                    setNameErr(err.response.data.ModelState["admin.Name"][0]);

                }
                else
                {
                    setNameErr();

                }
                
               if(err.response.data.ModelState["admin.Email"])
                {
                    setMailErr(err.response.data.ModelState["admin.Email"][0]);
                }
                else
                {
                    setMailErr();
                }
               if(err.response.data.ModelState["admin.Password"])
                {
                    setPassErr(err.response.data.ModelState["admin.Password"][0]);
                }
                else
                {
                    setPassErr();
                }
                if(err.response.data.ModelState["admin.Phone"])
                {
                    setPhnErr(err.response.data.ModelState["admin.Phone"][0]);
                }
                else
                {
                    setPhnErr();
                }
                 if(err.response.data.ModelState["admin.Address"])
                {
                    setAddErr(err.response.data.ModelState["admin.Address"][0]);
                }
                else
                {
                    setAddErr();
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
                        <h2>Add An Admin</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>NAME</label><br />
                          <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                          <span class="text-danger">{errN}</span><br/>
                          
                         
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="mail" id="mail" value={mail} onChange={(e)=>{setMail(e.target.value)}} />
                          <span class="text-danger">{errM}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="pass" id="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
                          <span class="text-danger">{errP}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="phn" id="phn" value={phn} onChange={(e)=>{setPhn(e.target.value)}} />
                          <span class="text-danger">{errPH}</span><br/>

                          <label>ADDRESS</label><br/>
                          <input type="text" name="add" id="add" value={add} onChange={(e)=>{setAdd(e.target.value)}} />
                          <span class="text-danger">{errADD}</span><br/>

            
                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/admin/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link>

                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default AdminAdd;