import Dashboard from "../others/Dashboard";
import TopMenu from "./TopMenu";
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const Main=()=>{
    return(
        <div>
              
                <BrowserRouter>
                    <TopMenu/>
                    <br></br>
                    <Routes>

                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    
                    </Routes>
            </BrowserRouter>
                
        </div>
    )
}
export default Main;