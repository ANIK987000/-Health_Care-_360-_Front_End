import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";


const DoctorAdd=()=>{


    const[d_name,setName] = useState("");
    const[d_phn,setPhn] = useState("");
    const[d_mail,setMail] = useState("");
    const[d_pass,setPass] = useState("");
    const[d_add,setAdd] = useState("");
    const[d_qual,setQual] = useState("");
    const[d_visit,setVisit]= useState("");
    const[d_appoint,setAppoint ]= useState("");
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

        var data = {Name:d_name,Email:d_mail,Password:d_pass,Phone:d_phn, Address:d_add,Qualification:d_qual,VisitingHours:d_visit,AppointmentFee:d_appoint};
        axios.post("https://localhost:44326/api/doctor/add",data)
        .then((rsp)=>{
            //setMsg(rsp.data.msg);
            if(rsp.status==200)
            {
                swal("Success","Doctor added successfully","success");
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
                {/* <Topbar></Topbar> */}


                <div class="content">
                
                    <div class="title">
                        <h2>Add A Doctor</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>NAME</label><br />
                          <input type="text" name="d_name" id="d_name" value={d_name} onChange={(e)=>{setName(e.target.value)}}/>
                          <span class="ad-err">{err.d_name? err.d_name[0]:''}</span><br/>
                          
                         
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="d_mail" id="d_mail" value={d_mail} onChange={(e)=>{setMail(e.target.value)}} />
                          <span class="ad-err">{err.d_mail? err.d_mail[0]:''}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="d_pass" id="d_pass" value={d_pass} onChange={(e)=>{setPass(e.target.value)}}/>
                          <span class="ad-err">{err.d_pass? err.d_pass[0]:''}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="d_phn" id="d_phn" value={d_phn} onChange={(e)=>{setPhn(e.target.value)}} />
                          <span class="ad-err">{err.d_phn? err.d_phn[0]:''}</span><br/>

                          <label>ADDRESS</label><br/>
                          <input type="text" name="d_add" id="d_add" value={d_add} onChange={(e)=>{setAdd(e.target.value)}} />
                          <span class="ad-err">{err.d_add? err.d_add[0]:''}</span><br/>

                          <label>Qualification</label><br/>
                          <input type="text" name="d_qual" id="d_qual" value={d_qual} onChange={(e)=>{setQual(e.target.value)}} />
                          <span class="ad-err">{err.d_qual? err.d_qual[0]:''}</span><br/>


                          <label>VisitingHours</label><br/>
                          <input type="text" name="d_visit" id="d_visit" value={d_visit} onChange={(e)=>{setVisit(e.target.value)}} />
                          <span class="ad-err">{err.d_visit? err.d_visit[0]:''}</span><br/>


                          <label>AppointmentFee</label><br/>
                          <input type="text" name="d_appoint" id="d_appoint" value={d_appoint} onChange={(e)=>{setAppoint(e.target.value)}} />
                          <span class="ad-err">{err.d_appoint? err.d_appoint[0]:''}</span><br/>


                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/doctor/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"20px"}}>Back</button></Link>

                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default DoctorAdd;