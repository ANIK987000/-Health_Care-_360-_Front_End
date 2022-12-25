import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";


const StaffAdd=()=>{


    const[s_name,setName] = useState("");
    const[s_phn,setPhn] = useState("");
    const[s_mail,setMail] = useState("");
    const[s_pass,setPass] = useState("");
    const[s_add,setAdd] = useState("");
    const[s_sal,setSalary] = useState("");
    const navigate = useNavigate();
    const[msg,setMsg] = useState("");
    const[err,setErr] = useState("");


    const[errN,setNameErr] = useState("");
    const[errM,setMailErr] = useState("");
    const[errP,setPassErr] = useState("");
    const[errPH,setPhnErr] = useState("");
    const[errADD,setAddErr] = useState("");
    const[errSal,setSalErr] = useState("");


    const handleForm=(event)=>{
        event.preventDefault();
        // setName('');
        // setMail('');
        // setPass('');
        // setPhn('');
        // setAdd('');
        // setMsg('');
        // setErr('');

        var data = {Name:s_name,Email:s_mail,Password:s_pass,Phone:s_phn, Address:s_add,Salary:s_sal};
        axios.post("https://localhost:44326/api/staff/add",data)
        .then((rsp)=>{
            //setMsg(rsp.data.msg);
            if(rsp.status==200)
            {
                swal("Success","Staff added successfully","success");
            }
            setErr(rsp.data);
            //debugger;
        },(err)=>{
            if(err.response.status==400)
            {
                if(err.response.data.ModelState["staffDTO.Name"])
                {
                    setNameErr(err.response.data.ModelState["staffDTO.Name"][0]);
                }
                else
                {
                    setNameErr();
                }
                if(err.response.data.ModelState["staffDTO.Email"])
                {
                    setMailErr(err.response.data.ModelState["staffDTO.Email"][0]);
                }
                else
                {
                    setMailErr();
                }
                if(err.response.data.ModelState["staffDTO.Password"])
                {
                    setPassErr(err.response.data.ModelState["staffDTO.Password"][0]);
                }
                else
                {
                    setPassErr();
                }
                if(err.response.data.ModelState["staffDTO.Phone"])
                {
                    setPhnErr(err.response.data.ModelState["staffDTO.Phone"][0]);
                }
                else
                {
                    setPhnErr();
                }
                if(err.response.data.ModelState["staffDTO.Address"])
                {
                    setAddErr(err.response.data.ModelState["staffDTO.Address"][0]);
                }
                else
                {
                    setAddErr();
                }
                if(err.response.data.ModelState["staffDTO.Salary"])
                {
                    setSalErr(err.response.data.ModelState["staffDTO.Salary"][0]);
                }
                else
                {
                    setSalErr();
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
                        <h2>Add A Staff</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>NAME</label><br />
                          <input type="text" name="s_name" id="s_name" value={s_name} onChange={(e)=>{setName(e.target.value)}}/>
                          <span class="text-danger">{errN}</span><br/>
                          
                         
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="s_mail" id="s_mail" value={s_mail} onChange={(e)=>{setMail(e.target.value)}} />
                          <span class="text-danger">{errM}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="e_pass" id="s_pass" value={s_pass} onChange={(e)=>{setPass(e.target.value)}}/>
                          <span class="text-danger">{errP}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="s_phn" id="s_phn" value={s_phn} onChange={(e)=>{setPhn(e.target.value)}} />
                          <span class="text-danger">{errPH}</span><br/>

                          <label>ADDRESS</label><br/>
                          <input type="text" name="s_add" id="s_add" value={s_add} onChange={(e)=>{setAdd(e.target.value)}} />
                           <span class="text-danger">{errADD}</span><br/>

                          <label>Salary</label><br/>
                          <input type="text" name="s_sal" id="s_sal" value={s_sal} onChange={(e)=>{setSalary(e.target.value)}} />
                          <span class="text-danger">{errSal}</span><br/>
                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/staff/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link>

                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default StaffAdd;