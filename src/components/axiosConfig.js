import axios from 'axios';
const instance = axios.create({
    baseURL:'https://localhost:44326/api'
});

instance.defaults.headers.common["Authorization"]=localStorage.getItem('_authToken');
instance.interceptors.request.use((config)=>{
    config.headers.common["Authorization"] = localStorage.getItem('_authToken');
    console.log("intercpeted");
    console.log(config);
    return config;
},(err)=>{
    
});
instance.interceptors.response.use((rsp)=>{
    // console.log(rsp);
    return rsp;
},(err)=>{
    if(err.status === 401){
        window.location.href="/logout";
    }
    return err;
});

export default instance;