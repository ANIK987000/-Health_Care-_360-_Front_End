import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";

const AdminUpdate=()=>{
    const params = useParams();
    const [admin,setAdmin] = useState({});


    useEffect(()=>{
        axios.get(`https://localhost:44326/api/admin/${params.ID}`)
        .then((rsp)=>{
            setAdmin(rsp.data);
            setID(rsp.data.ID);
            setName(rsp.data.Name);
            setMail(rsp.data.Email);
            setPassword(rsp.data.Password);
            setPhone(rsp.data.Phone);
            setAddress(rsp.data.Address);
         
           
            //console.log(rsp);
        },(err)=>{

        }) 
    },[]);
    const navigate = useNavigate();
    const[id,setID] = useState("");
    const[name,setName] = useState("");
    const[mail,setMail] = useState("");
    const[pass,setPassword] = useState("");
    const[phn,setPhone] = useState("");
    const[add,setAddress] = useState("");

    const[errN,setNameErr] = useState("");
    const[errM,setMailErr] = useState("");
    const[errP,setPassErr] = useState("");
    const[errPH,setPhnErr] = useState("");
    const[errADD,setAddErr] = useState("");
   
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

        var data = {ID:id,Name:name,Email:mail,Password:pass,Phone:phn, Address:add};

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Updating";
        swal("Do you want to update?", {
            buttons: ["No", "Yes"],
        })
        .then((willUpdate) => {
            if (willUpdate) {
             
                axios.post("https://localhost:44326/api/admin/update",data)
                .then((rsp)=>{
                    if (rsp.status == 200) {
                        //navigate('/seller/dashboard');
                        swal('Success', "Admin updated successfully", 'success')
                    } else if (rsp.response.status == 400) {
                     
                        thisClicked.innerText = "Update";
                    }
                },(err)=>{
                    if(err.response.status==400)
                    {
                        setAddErr(err.response.data.ModelState["admin.Address"][0]);
                        setNameErr(err.response.data.ModelState["admin.Name"][0]);
                        setMailErr(err.response.data.ModelState["admin.Email"][0]);
                        setPassErr(err.response.data.ModelState["admin.Password"][0]);
                        setPhnErr(err.response.data.ModelState["admin.Phone"][0]);
                    }
                })
                
            } else {
                swal("Admin is not Updated");
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
                        <h2>Update An Admin</h2>
                       
                    </div>
                    <div class="ad_content">     
                        <form>
                        <label> ID</label><br/>
                           <input  name="id" id="id" value={id} onChange={(e)=>{setID(e.target.value)}} disabled/><br/>
                           <label> NAME</label><br/>
                           <input type="text" name="name" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                           <span class="text-danger">{errN}</span><br/>

                           <label>EMAIL</label><br/>
                           <input type="text" name="mail" id="mail" value={mail }  onChange={(e)=>{setMail(e.target.value)}} />
                           <span class="text-danger">{errM}</span><br/> 

                           <label>PASSWORD</label><br/>
                           <input type="text" name="pass" id="pass" value={pass } onChange={(e)=>{setPassword(e.target.value)}} />
                           <span class="text-danger">{errP}</span><br/>

                           <label>PHONE NUMBER</label><br/>
                           <input type="text" name="phn" id="phn" value={phn } onChange={(e)=>{setPhone(e.target.value)}} />
                           <span class="text-danger">{errPH}</span><br/>  

                           <label>ADDRESS</label><br/>
                           <input type="text" name="add" id="add" value={add } onChange={(e)=>{setAddress(e.target.value)}} />
                           <span class="text-danger">{errADD}</span><br/>

                             

                           <button type="button" class="btn btn-success" onClick={handleForm}>Edit</button>      
                           <Link to={"/admin/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"150px"}}>Back</button></Link> 
                        </form>
                
                            
                    </div>
                </div>
            </div>
        
     
    )
}
export default AdminUpdate;