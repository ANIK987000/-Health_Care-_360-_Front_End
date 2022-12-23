import { useEffect } from "react";
import axiosConfig from './axiosConfig';
import axios from "axios";

const Logout =()=>{

    const token = localStorage.getItem("_authToken");
    var data = {token:token}
    useEffect(()=>{
        axios.post(`https://localhost:44326/api/Logout/${token}`)
        .then((rsp)=>{
            localStorage.clear();
            window.location.href="/";
        });
    },[])   
}

export default Logout;