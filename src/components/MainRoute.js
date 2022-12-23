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
import StaffUpdate from './admin/others/StaffUpdate';
import DoctorAdd from './admin/others/DoctorAdd';
import DoctorUpdate from './admin/others/DoctorUpdate';
import PatientAdd from './admin/others/PatientAdd';
import PatientUpdate from './admin/others/PatientUpdate';
import StaffAdd from './admin/others/StaffAdd';

const MainRoute = () => {
    return (
        <div>
            <BrowserRouter>
           
                <Routes>


                <Route path="/signin" element={<Login />}></Route>

            <Route path="/signout" element={<Logout />}></Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
            <Route path="/" element={<Navigate replace to="/logout" />}></Route>

               

                    {/* ___________________________Admin______________________________ */}
                   
                    <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/doctor/add" element={<DoctorAdd></DoctorAdd>}></Route>
                    <Route path="/doctor/list" element={<DoctorList></DoctorList>}></Route>
                    <Route path="/doctor/update/:ID" element={<DoctorUpdate></DoctorUpdate>}></Route>
                    <Route path="/patient/add" element={<PatientAdd></PatientAdd>}></Route>
                    <Route path="/patient/list" element={<PatientList></PatientList>}></Route>
                    <Route path="/patient/update/:ID" element={<PatientUpdate></PatientUpdate>}></Route>
                    <Route path="/staff/add" element={<StaffAdd></StaffAdd>}></Route>
                    <Route path="/staff/list" element={<StaffList></StaffList>}></Route>
                    <Route path="/staff/update/:ID" element={<StaffUpdate></StaffUpdate>}></Route>


                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default MainRoute;
