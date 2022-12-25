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



    const[errN,setNameErr] = useState("");
    const[errM,setMailErr] = useState("");
    const[errP,setPassErr] = useState("");
    const[errPH,setPhnErr] = useState("");
    const[errADD,setAddErr] = useState("");
    const[errQual,setQualErr] = useState("");
    const[errVisit,setVisitErr] = useState("");
    const[errAppoint,setAppointErr] = useState("");



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
        },(err)=>{
            if(err.response.status==400)
            {
                if(err.response.data.ModelState["doctor.Name"])
                {
                    setNameErr(err.response.data.ModelState["doctor.Name"][0]);
                }
                else
                {
                    setNameErr();
                }

                if(err.response.data.ModelState["doctor.Email"])
                {
                    setMailErr(err.response.data.ModelState["doctor.Email"][0]);
                }
                else
                {
                    setMailErr();
                }

                if(err.response.data.ModelState["doctor.Password"])
                {
                    setPassErr(err.response.data.ModelState["doctor.Password"][0]);
                }
                else
                {
                    setPassErr();
                }

                if(err.response.data.ModelState["doctor.Phone"])
                {
                    setPhnErr(err.response.data.ModelState["doctor.Phone"][0]);
                }
                else
                {
                    setPhnErr();
                }
                if(err.response.data.ModelState["doctor.Address"])
                {
                    setAddErr(err.response.data.ModelState["doctor.Address"][0]);
                }
                else
                {
                    setAddErr();
                }
                if(err.response.data.ModelState["doctor.Qualification"])
                {
                    setQualErr(err.response.data.ModelState["doctor.Qualification"][0]);
                }
                else
                {
                    setQualErr();
                }
                
                if(err.response.data.ModelState["doctor.VisitingHours"])
                {
                    setVisitErr(err.response.data.ModelState["doctor.VisitingHours"][0]);
                }
                else
                {
                    setVisitErr();
                }
                if(err.response.data.ModelState["doctor.AppointmentFee"])
                {
                    setAppointErr(err.response.data.ModelState["doctor.AppointmentFee"][0]);
                }
                else
                {
                    setAppointErr();
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
                        <h2>Add A Doctor</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>NAME</label><br />
                          <input type="text" name="d_name" id="d_name" value={d_name} onChange={(e)=>{setName(e.target.value)}}/>
                          <span class="text-danger">{errN}</span><br/>
                          
                         
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="d_mail" id="d_mail" value={d_mail} onChange={(e)=>{setMail(e.target.value)}} />
                          <span class="text-danger">{errM}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="d_pass" id="d_pass" value={d_pass} onChange={(e)=>{setPass(e.target.value)}}/>
                          <span class="text-danger">{errP}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="d_phn" id="d_phn" value={d_phn} onChange={(e)=>{setPhn(e.target.value)}} />
                          <span class="text-danger">{errPH}</span><br/>

                          <label>ADDRESS</label><br/>
                          <input type="text" name="d_add" id="d_add" value={d_add} onChange={(e)=>{setAdd(e.target.value)}} />
                          <span class="text-danger">{errADD}</span><br/>

                          <label>Qualification</label><br/>
                          {/* <input type="text" name="d_qual" id="d_qual" value={d_qual} onChange={(e)=>{setQual(e.target.value)}} />
                          <span class="ad-err">{err.d_qual? err.d_qual[0]:''}</span><br/> */}
                          <select name="d_qual"  onChange={(e)=>{setQual(e.target.value)}}>
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
                        <span class="text-danger">{errQual}</span><br/>

                          <label>VisitingHours</label><br/>
                          {/* <input type="text" name="d_visit" id="d_visit" value={d_visit} onChange={(e)=>{setVisit(e.target.value)}} />
                          <span class="ad-err">{err.d_visit? err.d_visit[0]:''}</span><br/> */}
                        <select name="d_visit" onChange={(e)=>{setVisit(e.target.value)}}>
                           <option value="none">none</option>
                            <option value="2pm-4pm">2pm-4pm</option>
                            <option value="4pm-6pm">4pm-6pm</option>
                            <option value="6pm-8pm">6pm-8pm</option>
                            <option value="8pm-10pm">8pm-10pm</option>
                            <option value="10pm-12pm">10pm-12pm</option>
                            <option value="emergency-period">Emgergency Period</option>
                        </select>
                        <span class="text-danger">{errVisit}</span><br/>

                          <label>AppointmentFee</label><br/>
                          <input type="text" name="d_appoint" id="d_appoint" value={d_appoint} onChange={(e)=>{setAppoint(e.target.value)}} />
                          <span class="text-danger">{errAppoint}</span><br/>

                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/doctor/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link>

                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default DoctorAdd;