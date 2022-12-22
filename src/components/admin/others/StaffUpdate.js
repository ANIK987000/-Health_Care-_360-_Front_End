import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";

const StaffUpdate=()=>{
    const params = useParams();
    const [staff,setStaff] = useState({});


    useEffect(()=>{
        axios.get(`https://localhost:44326/api/staff/${params.ID}`)
        .then((rsp)=>{
            setStaff(rsp.data);
            setID(rsp.data.ID);
            setName(rsp.data.Name);
            setMail(rsp.data.Email);
            setPassword(rsp.data.Password);
            setPhone(rsp.data.Phone);
            setAddress(rsp.data.Address);
            setSalary(rsp.data.Salary);
           
            //console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const navigate = useNavigate();
    const[s_id,setID] = useState("");
    const[s_name,setName] = useState("");
    const[s_mail,setMail] = useState("");
    const[s_pass,setPassword] = useState("");
    const[s_phn,setPhone] = useState("");
    const[s_add,setAddress] = useState("");
    const[s_sal,setSalary] = useState("");
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

        var data = {ID:s_id,Name:s_name,Email:s_mail,Password:s_pass,Phone:s_phn, Address:s_add,Salary:s_sal};

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
                console.log(s_id);
                console.log(s_name);
                console.log(s_mail);
                console.log(s_pass);
                console.log(s_phn);
                console.log(s_add);
                console.log(s_sal);
                console.log(params);
                
                axios.post("https://localhost:44326/api/staff/update",data)
                .then((rsp)=>{
                    if (rsp.status == 200) {
                        //navigate('/seller/dashboard');
                        swal('Success', "Staff updated successfully", 'success')
                    } else if (rsp.status == 422) {
                        setErr(rsp.data.errors)
                        thisClicked.innerText = "Update";
                    }
                })
                
            } else {
                swal("Staff is not Updated");
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
                        <h2>Update A Staff</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form>
                        <label> ID</label><br/>
                           <input  name="s_id" id="s_id" value={s_id} onChange={(e)=>{setID(e.target.value)}} disabled/><br/>
                           <label> NAME</label><br/>
                           <input type="text" name="s_name" id="s_name" value={s_name} onChange={(e)=>{setName(e.target.value)}} />
                           <span>{err.s_name? err.s_name[0]:''}</span><br/>  

                           <label>EMAIL</label><br/>
                           <input type="text" name="s_mail" id="s_mail" value={s_mail }  onChange={(e)=>{setMail(e.target.value)}} />
                           <span>{err.s_mail? err.s_mail[0]:''}</span><br/>   

                           <label>PASSWORD</label><br/>
                           <input type="text" name="s_pass" id="s_pass" value={s_pass } onChange={(e)=>{setPassword(e.target.value)}} />
                           <span>{err.s_pass? err.s_pass[0]:''}</span><br/>  

                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="s_phn" id="s_phn" value={s_phn } onChange={(e)=>{setPhone(e.target.value)}} />
                           <span>{err.s_phn? err.s_phn[0]:''}</span><br/>    

                           <label>ADDRESS</label><br/>
                           <input type="text" name="s_add" id="s_add" value={s_add } onChange={(e)=>{setAddress(e.target.value)}} />
                           <span>{err.s_add? err.s_add[0]:''}</span><br/>  

                           <label>Salary</label><br/>
                           <input type="text" name="s_sal" id="s_sal" value={s_sal } onChange={(e)=>{setSalary(e.target.value)}} />
                           <span>{err.s_sal? err.s_sal[0]:''}</span><br/>   

                           <button type="button" class="btn btn-success" onClick={handleForm}>Edit</button>      
                           <Link to={"/staff/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"20px"}}>Back</button></Link> 
                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default StaffUpdate;