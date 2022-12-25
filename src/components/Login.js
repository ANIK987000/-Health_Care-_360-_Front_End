import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosConfig from './axiosConfig';
import axios from "axios";

const Login =()=>{
    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");
    const[msg,setMsg]=useState("");
    const[err,setErr] = useState("");
    document.title = "Login";
    const Submit=(event)=>{
        event.preventDefault();
        const login = document.getElementById("signin");
        login.className = "btn btn-secondary btn-block mb-4";
        login.innerHTML= "Please wait...";

        var data={Email:email, Password:pass};
        axios.post("https://localhost:44326/api/Login",data)
        //  axiosConfig.post("/Login",data)
        .then((rsp)=>{
            
            localStorage.setItem('_authToken',rsp.data.TKey);
            localStorage.setItem('name',rsp.data.Email);
            var name=localStorage.getItem('name');
            
            if (rsp.data.Type==="admin") {
    
                axios.get(`https://localhost:44326/api/admin/get/${name}`)
                .then((rsp)=>{
                    localStorage.setItem("user_id", rsp.data.ID);
                    localStorage.setItem("user_name", rsp.data.Name);
                    navigate('/admin/dashboard');
                    
                })
            }else if(rsp.data.Type==="doctor"){
                axios.get(`https://localhost:44326/api/doctor/get/${name}`)
                .then((rsp)=>{
                    localStorage.setItem("user_id", rsp.data.ID);
                    localStorage.setItem("user_name", rsp.data.Name);
                    navigate('/doctor/dashboard');
                })
            }else if(rsp.data.Type==="patient"){
                axios.get(`https://localhost:44326/api/patient/get/${name}`)
                .then((rsp)=>{
                    localStorage.setItem("user_id", rsp.data.ID);
                    localStorage.setItem("user_name", rsp.data.Name);
                    navigate('/patient/dashboard');
                })
            }else if(rsp.data.Type==="staff"){
                axios.get(`https://localhost:44326/api/staff/get/${name}`)
                .then((rsp)=>{
                    //localStorage.setItem("user_id", rsp.data.ID);
                    //localStorage.setItem("user_name", rsp.data.Name);
                    console.log(rsp.data);
                    navigate('/staff/dashboard');
                })
            }

            login.className = "btn btn-primary btn-block mb-4";
            login.innerHTML= "Sign in";
        },(err)=>{
            if (err.response.status === 401) {
                setErr(err.response.data)
                login.innerHTML= "Sign in";
            }

        });

    }
    
    return(
        <div>
        <br></br>
        <br></br>
        <br></br>
        <div className="col d-flex justify-content-center">
            
            <form onSubmit={Submit}>
            <h3>Login</h3>
            
            
            
            <div className="form-outline mb-4">
                <span className="text-danger">{err.email? err.email[0]:''}</span>
                <input type="text" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <label className="form-label">Email address</label>
            </div>
        
            <div className="form-outline mb-4">
                <span className="text-danger">{err.pass? err.pass[0]:''}</span>
                <input type="password" className="form-control" name="pass" onChange={(e)=>setPass(e.target.value)} value={pass} ></input>
                <label className="form-label">Password</label>
            </div>

            <button type="submit" id="signin" className="btn btn-primary btn-block mb-4" value="Sign in">Sign in</button>
            <p className="text-danger">{err}</p>
            
            <div className="text-center">
                <p>Not a member? <Link to="/signup">sign up</Link></p>
            </div>
            
            </form>

            
        </div>
        </div>
    )
}

export default Login;