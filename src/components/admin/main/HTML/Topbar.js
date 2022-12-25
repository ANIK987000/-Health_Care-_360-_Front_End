import "../CSS/Style.css";

const Topbar=()=>{
    return(
        
            <div class="header">
                <div class="nav">
                    <div class="search">
                    <marquee behavior="alternate" direction="right" style={{color:"#002b45",fontFamily: "myFirstFont"}}><b>|--- Welcome To HC360° ---|</b></marquee>
                    </div>
                    <div class="user">
                        <button>👮‍♂️ {localStorage.getItem('user_name')}</button>
                        
                        <div class="img-case">
                           
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Topbar;