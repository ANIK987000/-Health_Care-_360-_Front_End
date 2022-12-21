import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import axiosConfig from './axiosConfig';
import TopMenu from './admin/main/TopMenu';

//____________________Admin_______________________

import Dashboard from './admin/others/Dashboard';
import DoctorList from './admin/others/DoctorList';
import PatientList from './admin/others/PatientList';
import StaffList from './admin/others/StaffList';

const MainRoute = () => {
    return (
        <div>
            <BrowserRouter>
           
                <Routes>

{/* 
                    <Route path="/signin" element={<Login />}></Route>

                    <Route path="/signout" element={<Logout />}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/logout" element={<Logout/>}></Route>
                    <Route path="/" element={<Navigate replace to="/logout" />}></Route> */}


                    {/* ___________________________Admin______________________________ */}
                   
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/doctor/list" element={<DoctorList></DoctorList>}></Route>
                    <Route path="/patient/list" element={<PatientList></PatientList>}></Route>
                    <Route path="/staff/list" element={<StaffList></StaffList>}></Route>


                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default MainRoute;
