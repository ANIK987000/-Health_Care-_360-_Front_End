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


    const[errN,setNameErr] = useState("");
    const[errM,setMailErr] = useState("");
    const[errP,setPassErr] = useState("");
    const[errPH,setPhnErr] = useState("");
    const[errADD,setAddErr] = useState("");
    const[errDob,setDobErr] = useState("");
    const[errBloodGroup,setBloodGroupErr] = useState("");
    const[errDisease,setDiseaseErr] = useState("");


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
        },(err)=>{
            if(err.response.status==400)
            {
                if(err.response.data.ModelState["patient.Name"])
                {
                    setNameErr(err.response.data.ModelState["patient.Name"][0]);
                }
                else
                {
                    setNameErr();

                }
                if(err.response.data.ModelState["patient.Email"])
                {
                    setMailErr(err.response.data.ModelState["patient.Email"][0]);
                }
                else
                {
                    setMailErr();
                }
                if(err.response.data.ModelState["patient.Password"])
                {
                    setPassErr(err.response.data.ModelState["patient.Password"][0]);
                }
                else
                {
                    setPassErr();
                }
                if(err.response.data.ModelState["patient.Phone"])
                {
                    setPhnErr(err.response.data.ModelState["patient.Phone"][0]);
                }
                else
                {
                    setPhnErr();
                }
                if(err.response.data.ModelState["patient.Address"])
                {
                    setAddErr(err.response.data.ModelState["patient.Address"][0]);
                }
                else
                {
                    setAddErr();
                }
             
                if(err.response.data.ModelState["patient.Dob"])
                {
                    setDobErr(err.response.data.ModelState["patient.Dob"][0]);
                }
                else
                {
                    setDobErr();
                }
                if(err.response.data.ModelState["patient.BloodGroup"])
                {
                    setBloodGroupErr(err.response.data.ModelState["patient.BloodGroup"][0]);
                }
                else
                {
                    setBloodGroupErr();
                }
                if(err.response.data.ModelState["patient.Disease"])
                {
                    setDiseaseErr(err.response.data.ModelState["patient.Disease"][0]);
                }
                else
                {
                    setDiseaseErr();
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
                        <h2>Add A Patient</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form action="" method="POST" onSubmit={handleForm}>
                           
                          <label>NAME</label><br />
                          <input type="text" name="p_name" id="p_name" value={p_name} onChange={(e)=>{setName(e.target.value)}}/>
                          <span class="text-danger">{errN}</span><br/>
                          
                         
                          
                          <label>EMAIL</label><br/>
                          <input type="text" name="p_mail" id="p_mail" value={p_mail} onChange={(e)=>{setMail(e.target.value)}} />
                          <span class="text-danger">{errM}</span><br/>
                          
                          <label>PASSWORD</label><br/>
                          <input type="password" name="p_pass" id="p_pass" value={p_pass} onChange={(e)=>{setPass(e.target.value)}}/>
                          <span class="text-danger">{errP}</span><br/>
                          
                          <label>PHONE NUMBER</label><br/>
                          <input type="text" name="p_phn" id="p_phn" value={p_phn} onChange={(e)=>{setPhn(e.target.value)}} />
                          <span class="text-danger">{errPH}</span><br/>

                          <label>ADDRESS</label><br/>
                          <input type="text" name="p_add" id="p_add" value={p_add} onChange={(e)=>{setAdd(e.target.value)}} />
                          <span class="text-danger">{errADD}</span><br/>

                          <label>Date Of Birth</label><br/>
                          <input type="date" name="p_dob" id="p_dob" value={p_dob} onChange={(e)=>{setDob(e.target.value)}} />
                          <span class="text-danger">{errDob}</span><br/>

                          <label>BloodGroup</label><br/>
                          {/* <input type="text" name="p_bloodgroup" id="p_bloodgroup" value={p_bloodgroup} onChange={(e)=>{setBloodGroup(e.target.value)}} />
                          <span class="ad-err">{err.p_bloodgroup? err.p_bloodgroup[0]:''}</span><br/> */}
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

                        </select>
                        <span class="text-danger">{errBloodGroup}</span><br/>

                          <label>Disease</label><br/>
                          <input type="text" name="p_disease" id="p_disease" value={p_disease} onChange={(e)=>{setDisease(e.target.value)}} />
                          <span class="text-danger">{errDisease}</span><br/>
                          
                          <button class="btn btn-success">Add</button>
                          <Link to={"/patient/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link>
                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default PatientAdd;