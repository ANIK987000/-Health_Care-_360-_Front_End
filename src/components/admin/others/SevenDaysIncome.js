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
import {ComposedChart,Area, PieChart,Pie, Bar,BarChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const SevenDaysIncome=()=>{

    const {id} = useParams();
    const [doctorList,setDoctorList] = useState([]);
    const[d_qual,setQual] = useState("");
    const [search,setSearch] = useState("");

    const [today,setToday] = useState("");
    const [day1,setDay1] = useState("");
    const [day2,setDay2] = useState("");
    const [day3,setDay3] = useState("");
    const [day4,setDay4] = useState("");
    const [day5,setDay5] = useState("");
    const [day6,setDay6] = useState("");
    




    useEffect(()=>{
        // axiosConfig.get("/doctor/list")
        axios.get("https://localhost:44326/api/income/from/appointment/for/last/seven/days")
        .then((rsp)=>{
            setToday(rsp.data[0]);
            setDay1(rsp.data[1]);
            setDay2(rsp.data[2]);
            setDay3(rsp.data[3]);
            setDay4(rsp.data[4]);
            setDay5(rsp.data[5]);
            setDay6(rsp.data[6]);
            console(rsp.data);

        },(err)=>{

        }) 
    },[]);
//______________________________________________________

    const data = [
        {
            "name": "Today",
            "Income": today
          },
          {
            "name": "Yesterday",
            "Income": day1
          },
          {
            "name": "Day 02",
            "Income": day2
          },
          {
            "name": "Day 03",
            "Income": day3
          },
          {
            "name": "Day 04",
            "Income": day4
          },
          {
            "name": "Day 05",
            "Income": day5
          },
          {
              "name": "Day 06",
              "Income": day6
            },
        
      ];

     
 //_____________________________________________________________________

  

    //_____________________________________________________

    return(
        <div>
         
            <Sidebar/>
            <Topbar></Topbar>
            

                <div class="bar1">
                <div class="bar-main1">
                <ComposedChart width={780} height={350} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke=" yellow" />
                    
                    <Bar dataKey="Income" barSize={20} fill="#0e2bcf" />
                    
                    </ComposedChart>
                    
                </div>
                </div>    

        </div>
    )
}
export default SevenDaysIncome;