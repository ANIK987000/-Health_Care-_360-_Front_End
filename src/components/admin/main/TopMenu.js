import MenuItem from "./MenuItem";
import {useState,useEffect} from 'react';
import axiosConfig from '../../axiosConfig';
import { Link } from "react-router-dom";

const TopMenu=()=>{

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark ">
                <div className="collapse navbar-collapse ">

                    <h5 className="nav-item" style={{marginLeft: "20px"}}>GBS</h5>
                    
                        <div className="navbar-nav " style={{marginLeft: "20px"}}>
                            <MenuItem url="/dashboard" title="Dashboard"/>
                            <MenuItem url="/doctor/list" title="DoctorList"/>
                            <MenuItem url="/patient/list" title="PatientList"/>
                            <MenuItem url="/staff/list" title="StaffList"/>
                            <Link to="/signout" style={{marginLeft:"20px"}}><button type="button" className="btn btn-outline-primary">Sign Out</button></Link>
                        </div>
                
           
                </div>
        </nav>
        </div>
    )
}
export default TopMenu;