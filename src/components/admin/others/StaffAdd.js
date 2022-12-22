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
                        <h2>Add A Staff</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>NAME</label><br />
                          <input type="text" name="s_name" id="s_name" value={s_name} onChange={(e)=>{setName(e.target.value)}}/>
                          <span class="ad-err">{err.s_name? err.s_name[0]:''}</span><br/>
                          
                         
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="s_mail" id="s_mail" value={s_mail} onChange={(e)=>{setMail(e.target.value)}} />
                          <span class="ad-err">{err.e_mail? err.e_mail[0]:''}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="e_pass" id="s_pass" value={s_pass} onChange={(e)=>{setPass(e.target.value)}}/>
                          <span class="ad-err">{err.e_pass? err.e_pass[0]:''}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="s_phn" id="s_phn" value={s_phn} onChange={(e)=>{setPhn(e.target.value)}} />
                          <span class="ad-err">{err.e_phn? err.e_phn[0]:''}</span><br/>

                          <label>ADDRESS</label><br/>
                          <input type="text" name="s_add" id="s_add" value={s_add} onChange={(e)=>{setAdd(e.target.value)}} />
                          <span class="ad-err">{err.e_add? err.e_add[0]:''}</span><br/>

                          <label>Salary</label><br/>
                          <input type="text" name="s_sal" id="s_sal" value={s_sal} onChange={(e)=>{setSalary(e.target.value)}} />
                          <span class="ad-err">{err.s_sal? err.s_sal[0]:''}</span><br/>
                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/staff/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"20px"}}>Back</button></Link>

                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default StaffAdd;