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



const DoctorDepartmentGraph=()=>{

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

  

    //_____________________________________________________

    return(
        <div>
         
            <Sidebar/>
            <Topbar></Topbar>
            

                <div class="bar1">
                <div class="bar-main1">
                   
                    
                <PieChart width={830} height={250}>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="red" />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#05466e" label />
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
                    <Link to={"/doctor/list"}><button type="button" class="btnnn" style={{float:"right",marginRight:"50px",marginTop:"10px"}}>Back</button></Link>     
                </div>    

        </div>
    )
}
export default DoctorDepartmentGraph;