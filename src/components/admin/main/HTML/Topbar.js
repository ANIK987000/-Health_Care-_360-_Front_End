import "../CSS/Style.css";

const Topbar=()=>{
    return(
        
            <div class="header">
                <div class="nav">
                    <div class="search">
                    <marquee behavior="alternate" direction="right" style={{color:"#002b45",fontFamily: "myFirstFont"}}><b>|--- Welcome {localStorage.getItem('user_name')} ---|</b></marquee>
                    </div>
                    <div class="user">
                        <a href="#" class="btnnn">Add New</a>
                        
                        <div class="img-case">
                           
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Topbar;