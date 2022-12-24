import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";

const DoctorUpdate=()=>{
    const params = useParams();
    const [doctor,setDoctor] = useState({});


    useEffect(()=>{
        axios.get(`https://localhost:44326/api/doctor/got/${params.ID}`)
        .then((rsp)=>{
            setDoctor(rsp.data);
            setID(rsp.data.ID);
            setName(rsp.data.Name);
            setMail(rsp.data.Email);
            setPassword(rsp.data.Password);
            setPhone(rsp.data.Phone);
            setAddress(rsp.data.Address);
            setQualification(rsp.data.Qualification);
            setVisitingHours(rsp.data.VisitingHours);
            setAppointmentFee(rsp.data.AppointmentFee);
           
            //console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const navigate = useNavigate();
    const[d_id,setID] = useState("");
    const[d_name,setName] = useState("");
    const[d_mail,setMail] = useState("");
    const[d_pass,setPassword] = useState("");
    const[d_phn,setPhone] = useState("");
    const[d_add,setAddress] = useState("");
    const[d_qual,setQualification] = useState("");
    const[d_visit,setVisitingHours] = useState("");
    const[d_appoint,setAppointmentFee] = useState("");
    const[msg,setMsg]=useState("");

   //________________________________________________________________________________________________

    const[err,setErr] = useState("");

    const handleForm = (e) =>{
        e.preventDefault();
        // var fData = new FormData();
        // fData.append("ID", s_id);
        // fData.append("Name", s_name);
        // fData.append("Email", s_mail);
        // fData.append("Password", s_pass);
        // fData.append("Phone", s_phn);
        // fData.append("Address", s_add);
        // fData.append("Salary", s_sal);

        var data = {ID:d_id,Name:d_name,Email:d_mail,Password:d_pass,Phone:d_phn, Address:d_add,Qualification:d_qual,VisitingHours:d_visit,AppointmentFee:d_appoint};

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
                console.log(d_id);
                console.log(d_name);
                console.log(d_mail);
                console.log(d_pass);
                console.log(d_phn);
                console.log(d_add);
                console.log(d_qual);
                console.log(d_visit);
                console.log(d_appoint);
                console.log(params);
                
                axios.post("https://localhost:44326/api/doctor/update",data)
                .then((rsp)=>{
                    if (rsp.status == 200) {
                        //navigate('/seller/dashboard');
                        swal('Success', "Doctor updated successfully", 'success')
                    } else if (rsp.status == 422) {
                        setErr(rsp.data.errors)
                        thisClicked.innerText = "Update";
                    }
                })
                
            } else {
                swal("Doctor is not Updated");
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
                        <h2>Update A Doctor</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form>
                        <label> ID</label><br/>
                           <input  name="d_id" id="d_id" value={d_id} onChange={(e)=>{setID(e.target.value)}} disabled/><br/>
                           <label> NAME</label><br/>
                           <input type="text" name="d_name" id="d_name" value={d_name} onChange={(e)=>{setName(e.target.value)}} />
                           <span>{err.d_name? err.d_name[0]:''}</span><br/>  

                           <label>EMAIL</label><br/>
                           <input type="text" name="d_mail" id="d_mail" value={d_mail }  onChange={(e)=>{setMail(e.target.value)}} />
                           <span>{err.d_mail? err.d_mail[0]:''}</span><br/>   

                           <label>PASSWORD</label><br/>
                           <input type="text" name="d_pass" id="d_pass" value={d_pass } onChange={(e)=>{setPassword(e.target.value)}} />
                           <span>{err.d_pass? err.d_pass[0]:''}</span><br/>  

                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="d_phn" id="d_phn" value={d_phn } onChange={(e)=>{setPhone(e.target.value)}} />
                           <span>{err.d_phn? err.d_phn[0]:''}</span><br/>    

                           <label>ADDRESS</label><br/>
                           <input type="text" name="d_add" id="d_add" value={d_add } onChange={(e)=>{setAddress(e.target.value)}} />
                           <span>{err.d_add? err.d_add[0]:''}</span><br/>  

                           <label>Qualification</label><br/>
                           {/* <input type="text" name="d_qual" id="d_qual" value={d_qual } onChange={(e)=>{setQualification(e.target.value)}} />
                           <span>{err.d_qual? err.d_qual[0]:''}</span><br/>   */}
                           <select name="d_qual" onChange={(e)=>{setQualification(e.target.value)}}>
                           <option value="none">none</option>
                            <option value="Surgeon">Surgeon</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Orthopedist">Orthopedist</option>
                            <option value="Urologist">Urologist</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Orthodontist">Orthodontist</option>
                            <option value="Anesthesiologist">Anesthesiologist</option>
                            <option value="Cardiology physician">Cardiology physician</option>
                            </select><br></br>
                           
                           <label>VisitingHours</label><br/>
                           {/* <input type="text" name="d_visit" id="d_visit" value={d_visit } onChange={(e)=>{setVisitingHours(e.target.value)}} />
                           <span>{err.d_visit? err.d_visit[0]:''}</span><br/>   */}
                           <select name="d_visit" onChange={(e)=>{setVisitingHours(e.target.value)}}>
                           <option value="none">none</option>
                            <option value="2pm-4pm">2pm-4pm</option>
                            <option value="4pm-6pm">4pm-6pm</option>
                            <option value="6pm-8pm">6pm-8pm</option>
                            <option value="8pm-10pm">8pm-10pm</option>
                            <option value="10pm-12pm">10pm-12pm</option>
                            <option value="emergency-period">Emgergency Period</option>
                        </select><br></br>
                           
                           <label>AppointmentFee</label><br/>
                           <input type="text" name="d_appoint" id="d_appoint" value={d_appoint } onChange={(e)=>{setAppointmentFee(e.target.value)}} />
                           <span>{err.d_appoint? err.d_appoint[0]:''}</span><br/>   

                           <button type="button" class="btn btn-success" onClick={handleForm}>Edit</button>      
                           <Link to={"/doctor/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link> 
                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default DoctorUpdate;