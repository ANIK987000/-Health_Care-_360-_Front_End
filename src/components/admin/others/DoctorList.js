import TopMenu from "../main/TopMenu";
import axiosConfig from '../../axiosConfig';
import {Link, useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import Sidebar from "../main/HTML/Sidebar";
import Topbar from "../main/HTML/Topbar";
import TopBox from "../main/HTML/TopBox";
import Topbar1 from "../main/HTML/Topbar1";



import React, { PureComponent } from 'react';
import {PieChart,Pie, Bar,BarChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const DoctorList=()=>{

    const {id} = useParams();
    const [doctorList,setDoctorList] = useState([]);
    const[d_qual,setQual] = useState("");
    const [search,setSearch] = useState("");

    const [surgeon,setSurgeon] = useState("");
    const [dermatologist,setDermatologist] = useState("");
    const [orthopedist,setOrthopedist] = useState("");
    const [urologist,setUrologist] = useState("");
    const [neurologist,setNeurologist] = useState("");
    const [orthodontist,setOrthodontist] = useState("");
    const [anesthesiologist,setAnesthesiologist] = useState("");
    const [cardiology,setCardiology] = useState("");



    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/doctor/list")
        .then((rsp)=>{
            setDoctorList(rsp.data);
            console.log(rsp.data);
        },(err)=>{

        }) 
    },[]);

    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/doctor/count/by/qual")
        .then((rsp)=>{
            setSurgeon(rsp.data[0]);
            setDermatologist(rsp.data[1]);
            setOrthopedist(rsp.data[2]);
            setUrologist(rsp.data[3]);
            setNeurologist(rsp.data[4]);
            setOrthodontist(rsp.data[5]);
            setAnesthesiologist(rsp.data[6]);
            setCardiology(rsp.data[7]);
            console.log(surgeon);
            console.log(dermatologist);
            console.log(orthopedist);
            console.log(urologist);
            console.log(neurologist);
            console.log(orthodontist);
            console.log(anesthesiologist);
            console.log(cardiology);
        },(err)=>{

        }) 
    },[]);
//______________________________________________________

    const data01 = [
        {
            "name": "Group A",
            "value": 2400
          },
          {
            "name": "Group B",
            "value": 4567
          },
          {
            "name": "Group C",
            "value": 1398
          },
          {
            "name": "Group D",
            "value": 9800
          },
          {
            "name": "Group E",
            "value": 3908
          },
          {
            "name": "Group F",
            "value": 4800
          },
          {
              "name": "Group G",
              "value": 4800
            },
            {
              "name": "Group H",
              "value": 4800
            }
          
      ];

      const data02 = [

          {
            "name": "Surgeon",
            "value": surgeon
          },
          {
            "name": "Dermatologist",
            "value": dermatologist
          },
          {
            "name": "orthopedist",
            "value": orthopedist
          },
          {
            "name": "Urologist",
            "value": urologist
          },
          {
            "name": "Neurologist",
            "value": neurologist
          },
          {
            "name": "Arthodontist",
            "value": orthodontist
          },
          {
              "name": "Anesthesiologist",
              "value": anesthesiologist
            },
            {
              "name": "Cardiology",
              "value": cardiology
            }
  
      ];
 //_____________________________________________________________________

    
 const DeleteDoctor = (e, id)=>{
    e.preventDefault();
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";
    swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this doctor!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
            if (willDelete) {
                axios.post(`https://localhost:44326/api/doctor/delete/${id}`)
                .then((rsp)=>{
                    if(rsp.status===200){
                        swal("Success","Doctor deleted successfully", "success");
                        thisClicked.closest("tr").remove();
                    }
                    else {
                        swal("Success", "No doctor found", "success")
                        thisClicked.innerText = "Delete";
                    }
                },(err)=>{
                    debugger;
                });
                // thisClicked.closest("div").remove();
            } else {
                swal("Canceled!");
                thisClicked.innerText = "Delete";
            }
        });

    }


    //_____________________________________________________

    return(
        <div>
         
            <Sidebar/>
     
            <div class="header">
                <div class="nav">
                    <div class="qual">
                    <label>Qualification:</label>
                        <select name="d_qual" value={d_qual} onChange={(e)=>{setQual(e.target.value)}}>
                            <option value="">empty</option>
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
                    </div>

                    <div class="search">
                        <input type="search"name="search" onChange={(e)=>{setSearch(e.target.value)}}    placeholder="Type here to search..."></input>
                        <button type="submit"></button>
                    </div>
                    <div class="user">
                   
                        <a href="/doctor/add" class="btnnn">Add New</a>
                       
                        
                        <div class="img-case">
                               
                       
                        </div>
                    </div>
                </div>
            </div>

                <div class="content5">
                    <a href="/doctor/departmentwise/doctor/numbers">Click here to see department wise doctor numbers </a>
                    {/* <Link to={"/doctor/departmentwise/doctor/numbers"}><button type="button" class="btn btn-info">Click here to see department wise doctor numbers</button></Link> */}
                </div>
            

            <div class="content1">

                    <div class="title">
                        <h2>Doctor List</h2>
                       
                    </div>

                    <table>
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Qualification</th>
                                <th>VisitingHours</th>
                                <th>AppointmentFee</th>
                                <th></th>
                                <th></th>

                                </tr>
                

                    {
                                doctorList.filter((val)=>{
                                        
                                        if(search=="" && d_qual== "")
                                        {
                                            return val;
                                        }
                            
                                        else if(d_qual== "" && val.Name.toLowerCase().includes(search.toLowerCase()))
                                        {
                                            return val;
                                        }
                                        else if(search=="" && val.Qualification.toLowerCase().includes(d_qual.toLowerCase()))
                                        {
                                            return val;
                                        }


                                        else if(val.Name.toLowerCase().includes(search.toLowerCase()) && val.Qualification.toLowerCase().includes(d_qual.toLowerCase()))
                                        {
                                            return val;
                                        }
                                     
                                })

                                
                                .map((val)=>{

                                    return(
                                        <tr key={val.Name}>
                                                   
                                                   <td>{val.Name}</td>                   
                                                   <td>{val.Email}</td>
                                                   <td>{val.Phone}</td>
                                                   <td>{val.Address}</td>
                                                   <td>{val.Qualification}</td>
                                                   <td>{val.VisitingHours}</td>
                                                   <td>{val.AppointmentFee}</td>
                                                   <td><button type="button" onClick={(e)=>DeleteDoctor(e,val.ID)} class="btn btn-danger">Delete</button></td>
                                                   <td><Link to={`/doctor/update/${val.ID}`}><button type="button" class="btn btn-info">Edit</button></Link></td>
                                               
                                              </tr>

                                    
                                    )

                                })


                            }
                            </table>
                                
                             
                          
             
            </div>
                {/* <div class="bar">
                <div class="bar-main">
                   
                    
                <PieChart width={830} height={250}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>


                <div class="lable">
                         <span>Surgeon:{surgeon}</span>
                         <span>Dermatologist:{dermatologist}</span>
                         <span>Orthopedist:{orthopedist}</span>
                         <span>Urologist:{urologist}</span>
                         <span>Neurologist:{neurologist}</span>
                         <span>Orthodontist:{orthodontist}</span>
                         <span>Anesthesiologist:{anesthesiologist}</span>
                         <span>Cardiology:{cardiology}</span>
                    </div>
                    </div>       
                </div>     */}

        </div>
    )
}
export default DoctorList;