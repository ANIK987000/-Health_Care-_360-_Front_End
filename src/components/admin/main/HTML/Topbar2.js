import "../CSS/Style.css";

const Topbar2=()=>{
    return(
        
            <div class="header">
                <div class="nav">
                    <div class="search">
                        <input type="text" placeholder="Search.."></input>
                        <button type="submit"></button>
                    </div>
                    <div class="user">
                        <a href="/patient/add" class="btnnn">Add New</a>
                        
                        <div class="img-case">
                           
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Topbar2;