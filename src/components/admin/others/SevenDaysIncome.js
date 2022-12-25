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
import {FunnelChart,Funnel,LabelList, ComposedChart,Area, PieChart,Pie, Bar,BarChart,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



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
            

        },(err)=>{

        }) 
    },[]);

    const [tday,setTday] = useState("");
    const [dy1,setDy1] = useState("");
    const [dy2,setDy2] = useState("");
    const [dy3,setDy3] = useState("");
    const [dy4,setDy4] = useState("");
    const [dy5,setDy5] = useState("");
    const [dy6,setDy6] = useState("");

    useEffect(()=>{
      // axiosConfig.get("/doctor/list")
      axios.get("https://localhost:44326/api/income/from/medical/store/for/last/seven/days")
      .then((rsp)=>{
          setTday(rsp.data[0]);
          setDy1(rsp.data[1]);
          setDy2(rsp.data[2]);
          setDy3(rsp.data[3]);
          setDy4(rsp.data[4]);
          setDy5(rsp.data[5]);
          setDy6(rsp.data[6]);
        

      },(err)=>{

      }) 
  },[]);
//______________________________________________________

    const data = [
      
         
          {
              "name": "Day 06",
              "Income From Appointment": day6
          },   
          {
            "name": "Day 05",
            "Income From Appointment": day5
          },
          {
              "name": "Day 04",
              "Income From Appointment": day4
          },
          {
              "name": "Day 03",
              "Income From Appointment": day3
          },
          {
              "name": "Day 02",
              "Income From Appointment": day2
          },
          {
              "name": "Yesterday",
              "Income From Appointment": day1
          },
          {
              "name": "Today",
              "Income From Appointment": today
          },
         
        
      ];


      const data01 = [
        {
            "name": "Today",
            "value": tday,
            "fill": "#068006"
          },
          {
            "name": "Yesterday",
            "value": dy1,
            "fill": "#a88011"
          },
          {
            "name": "Day 02",
            "value": dy2,
            "fill": "#6f9409"
          },
          {
            "name": "Day 03",
            "value": dy3,
            "fill": "#099488"
          },
          {
            "name": "Day 04",
            "value": dy4,
            "fill": "#860994"
          },
          {
            "name": "Day 05",
            "value": dy5,
            "fill": "#820c16"
          },
          {
              "name": "Day 06",
              "value": dy6,
              "fill": "#0914de"
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
                    <CartesianGrid stroke=" white" />
                    
                    <Bar dataKey="Income From Appointment" barSize={20} fill="#ad1409" />
                    
                    </ComposedChart>
                    
                </div>
                </div>    


                <div class="bar">
                <div class="bar-main">
                                           
                <FunnelChart width={780} height={250}>
                  <Tooltip />
                  <Funnel
                    dataKey="value"
                    data={data01}
                    isAnimationActive
                  >
                    <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                  </Funnel>
                </FunnelChart>
                    <span style={{marginLeft:"300px",color:"#ad1409"}}>🧧Income From Medical Store</span>
                </div>
                </div>    

        </div>
    )
}
export default SevenDaysIncome;