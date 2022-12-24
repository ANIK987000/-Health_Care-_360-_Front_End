import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";

const PatientUpdate=()=>{
    const params = useParams();
    const [patient,setPatient] = useState({});


    useEffect(()=>{
        axios.get(`https://localhost:44326/api/patient/${params.ID}`)
        .then((rsp)=>{
            setPatient(rsp.data);
            setID(rsp.data.ID);
            setName(rsp.data.Name);
            setMail(rsp.data.Email);
            setPassword(rsp.data.Password);
            setPhone(rsp.data.Phone);
            setAddress(rsp.data.Address);
            setDob(rsp.data.Dob);
            setBloodGroup(rsp.data.BloodGroup);
            setDisease(rsp.data.Disease);
           
            //console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const navigate = useNavigate();
    const[p_id,setID] = useState("");
    const[p_name,setName] = useState("");
    const[p_mail,setMail] = useState("");
    const[p_pass,setPassword] = useState("");
    const[p_phn,setPhone] = useState("");
    const[p_add,setAddress] = useState("");
    const[p_dob,setDob] = useState("");
    const[p_bloodgroup,setBloodGroup] = useState("");
    const[p_disease,setDisease] = useState("");
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

        var data = {ID:p_id,Name:p_name,Email:p_mail,Password:p_pass,Phone:p_phn, Address:p_add,Dob:p_dob,BloodGroup:p_bloodgroup,Disease:p_disease};

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
                console.log(p_id);
                console.log(p_name);
                console.log(p_mail);
                console.log(p_pass);
                console.log(p_phn);
                console.log(p_add);
                console.log(p_dob);
                console.log(p_bloodgroup);
                console.log(p_disease);
                console.log(params);
                
                axios.post("https://localhost:44326/api/patient/update",data)
                .then((rsp)=>{
                    if (rsp.status == 200) {
                        //navigate('/seller/dashboard');
                        swal('Success', "Patient updated successfully", 'success')
                    } else if (rsp.status == 422) {
                        setErr(rsp.data.errors)
                        thisClicked.innerText = "Update";
                    }
                })
                
            } else {
                swal("Patient is not Updated");
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
                        <h2>Update A Patient</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form>
                        <label> ID</label><br/>
                           <input  name="p_id" id="p_id" value={p_id} onChange={(e)=>{setID(e.target.value)}} disabled/><br/>
                           <label> NAME</label><br/>
                           <input type="text" name="p_name" id="p_name" value={p_name} onChange={(e)=>{setName(e.target.value)}} />
                           <span>{err.p_name? err.p_name[0]:''}</span><br/>  

                           <label>EMAIL</label><br/>
                           <input type="text" name="p_mail" id="p_mail" value={p_mail }  onChange={(e)=>{setMail(e.target.value)}} />
                           <span>{err.p_mail? err.p_mail[0]:''}</span><br/>   

                           <label>PASSWORD</label><br/>
                           <input type="text" name="p_pass" id="p_pass" value={p_pass } onChange={(e)=>{setPassword(e.target.value)}} />
                           <span>{err.p_pass? err.p_pass[0]:''}</span><br/>  

                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="p_phn" id="p_phn" value={p_phn } onChange={(e)=>{setPhone(e.target.value)}} />
                           <span>{err.p_phn? err.p_phn[0]:''}</span><br/>    

                           <label>ADDRESS</label><br/>
                           <input type="text" name="p_add" id="p_add" value={p_add } onChange={(e)=>{setAddress(e.target.value)}} />
                           <span>{err.p_add? err.p_add[0]:''}</span><br/>  

                           <label>Date Of Birth</label><br/>
                           <input type="text" name="p_dob" id="p_dob" value={p_dob } onChange={(e)=>{setDob(e.target.value)}} />
                           <span>{err.p_dob? err.p_dob[0]:''}</span><br/>  

                           
                           <label>BloodGroup</label><br/>
                           {/* <input type="text" name="p_bloodgroup" id="p_bloodgroup" value={p_bloodgroup } onChange={(e)=>{setBloodGroup(e.target.value)}} />
                           <span>{err.p_bloodgroup? err.p_bloodgroup[0]:''}</span><br/>   */}
                           <select name="p_bloodgroup" onChange={(e)=>{setBloodGroup(e.target.value)}}>
                           <option value="none">none</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>

                        </select><br></br>
                           
                           <label>Date Of Birth</label><br/>
                           <input type="text" name="p_disease" id="p_disease" value={p_disease } onChange={(e)=>{setDisease(e.target.value)}} />
                           <span>{err.p_disease? err.p_disease[0]:''}</span><br/>   

                           <button type="button" class="btn btn-success" onClick={handleForm}>Edit</button>      
                           <Link to={"/patient/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link> 
                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default PatientUpdate;