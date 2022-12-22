import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";


const PatientAdd=()=>{


    const[p_name,setName] = useState("");
    const[p_phn,setPhn] = useState("");
    const[p_mail,setMail] = useState("");
    const[p_pass,setPass] = useState("");
    const[p_add,setAdd] = useState("");
    const[p_dob,setDob] = useState("");
    const[p_bloodgroup,setBloodGroup ]= useState("");
    const[p_disease,setDisease ]= useState("");
    const navigate = useNavigate();
    const[msg,setMsg] = useState("");
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

        var data = {Name:p_name,Email:p_mail,Password:p_pass,Phone:p_phn, Address:p_add,Dob:p_dob,BloodGroup:p_bloodgroup,Disease:p_disease};
        axios.post("https://localhost:44326/api/patient/add",data)
        .then((rsp)=>{
            //setMsg(rsp.data.msg);
            if(rsp.status==200)
            {
                swal("Success","Patient added successfully","success");
            }
            setErr(rsp.data);
            //debugger;
        },(er)=>{
            if(er.status==422)
            {
                setErr(err.response.data);
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
                        <h2>Add A Patient</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>NAME</label><br />
                          <input type="text" name="p_name" id="p_name" value={p_name} onChange={(e)=>{setName(e.target.value)}}/>
                          <span class="ad-err">{err.p_name? err.p_name[0]:''}</span><br/>
                          
                         
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="p_mail" id="p_mail" value={p_mail} onChange={(e)=>{setMail(e.target.value)}} />
                          <span class="ad-err">{err.p_mail? err.p_mail[0]:''}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="p_pass" id="p_pass" value={p_pass} onChange={(e)=>{setPass(e.target.value)}}/>
                          <span class="ad-err">{err.p_pass? err.p_pass[0]:''}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="p_phn" id="p_phn" value={p_phn} onChange={(e)=>{setPhn(e.target.value)}} />
                          <span class="ad-err">{err.p_phn? err.p_phn[0]:''}</span><br/>

                          <label>ADDRESS</label><br/>
                          <input type="text" name="p_add" id="p_add" value={p_add} onChange={(e)=>{setAdd(e.target.value)}} />
                          <span class="ad-err">{err.p_add? err.p_add[0]:''}</span><br/>

                          <label>Date Of Birth</label><br/>
                          <input type="text" name="p_dob" id="p_dob" value={p_dob} onChange={(e)=>{setDob(e.target.value)}} />
                          <span class="ad-err">{err.p_dob? err.p_dob[0]:''}</span><br/>


                          <label>BloodGroup</label><br/>
                          <input type="text" name="p_bloodgroup" id="p_bloodgroup" value={p_bloodgroup} onChange={(e)=>{setBloodGroup(e.target.value)}} />
                          <span class="ad-err">{err.p_bloodgroup? err.p_bloodgroup[0]:''}</span><br/>


                          <label>Disease</label><br/>
                          <input type="text" name="p_disease" id="p_disease" value={p_disease} onChange={(e)=>{setDisease(e.target.value)}} />
                          <span class="ad-err">{err.p_disease? err.p_disease[0]:''}</span><br/>
                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/patient/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"20px"}}>Back</button></Link>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default PatientAdd;