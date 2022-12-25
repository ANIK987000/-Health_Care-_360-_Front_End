import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import TopBox from "../main/HTML/TopBox";
import TopMenu from "../main/TopMenu";
import "../main/CSS/Style.css";

import {useState,useEffect} from 'react';
import axios from 'axios';

import React, { PureComponent } from 'react';
import { Bar,BarChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Dashboard=()=>{
    const [admin,setAdmin] = useState("");
    const [doctor,setDoctor] = useState("");
    const [patient,setPatient] = useState("");
    const [staff,setStaff] = useState("");
    const [notice,setNotice] = useState("");
    const [appointment,setAppointment] = useState("");
    const [user,setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://localhost:44326/api/all/list/count")
        .then((rsp)=>{
            setDoctor(rsp.data[0]);
            setPatient(rsp.data[1]);
            setStaff(rsp.data[2]);
            setAdmin(rsp.data[3]);
            setNotice(rsp.data[4]);
            setAppointment(rsp.data[5]);
            setUser(rsp.data[6]);
           
            //console.log(rsp.data[0]);
            //console.log(rsp.data[1]);
            //console.log(rsp.data[2]);
            console.log(rsp.data);
        },(err)=>{

        }) 
    },[]);

    const data = [
        {
          "name": "Number Of Users",
          "admin": admin,
          "doctor": doctor,
          "patient": patient,
          "staff": staff,
         
          
        }
       
      ]
 

      //_____________________________________________________________

      const [income,setIncome] = useState("");
      useEffect(()=>{
          axios.get("https://localhost:44326/api/income/from/appointment/for/today")
          .then((rsp)=>{
            setIncome(rsp.data[0]);
              
              //console.log(rsp.data[0]);
              //console.log(rsp.data[1]);
              //console.log(rsp.data[2]);
              console.log(rsp.data);
          },(err)=>{
  
          }) 
      },[]);


    return(
        <div>

            <Sidebar/>
            <Topbar/>
           
            <div class="content">
                <div class="cards">
                        <div class="card">
                            <div class="box">
                                <h1>{admin}</h1>
                                <h3>Admins</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="students.png" alt=""> */}
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>{doctor}</h1>
                                <h3>Doctors</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="students.png" alt=""> */}
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>{patient}</h1>
                                <h3>Patients</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="teachers.png" alt=""> */}
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>{staff}</h1>
                                <h3>Staffs</h3>
                            </div>
                            <div class="icon-case">
                                {/* <img src="schools.png" alt=""> */}
                            </div>
                        </div>
                        <div class="card">
                            <div class="box">
                                <h1>{income}</h1>
                                <h3>Income</h3>
                            </div>
                            <div class="icon-case">
                               
                            </div>
                        </div>


                        <div class="card">
                            <div class="box">
                                <h1>{notice}</h1>
                                <h3>Notices</h3>
                            </div>
                            <div class="icon-case">
                               
                            </div>
                        </div>

                        <div class="card">
                            <div class="box">
                                <h1>{appointment}</h1>
                                <h3>Appoints</h3>
                            </div>
                            <div class="icon-case">
                               
                            </div>
                        </div>


                        <div class="card">
                            <div class="box">
                                <h1>{user}</h1>
                                <h3>Users</h3>
                            </div>
                            <div class="icon-case">
                               
                            </div>
                        </div>

             
                </div>
            </div>

              <div class="bar">
                <div class="bar-main">
                <BarChart width={730} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="admin" fill="blue" />
                    <Bar dataKey="doctor" fill=" rgb(6, 106, 126)" />
                    <Bar dataKey="patient" fill="green" />
                    <Bar dataKey="staff" fill="red" />
                    </BarChart>
                    </div>       
                </div>     
        </div>
    )
}
export default Dashboard;