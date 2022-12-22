import "../CSS/Style.css";

const Topbar1=()=>{
    return(
        
            <div class="header">
                <div class="nav">
                    <div class="search">
                        <input type="text" placeholder="Search.."></input>
                        <button type="submit"></button>
                    </div>
                    <div class="user">
                        <a href="/doctor/add" class="btnnn">Add New</a>
                        
                        <div class="img-case">
                           
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Topbar1;