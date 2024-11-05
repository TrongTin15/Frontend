
import Header from "./component/header";
import axios from "./util/axios.customize"
import { useEffect } from "react";
import { Outlet } from "react-router-dom";


function App() {
  useEffect(()=>{
const fetchHelloWorld = async()=>{
     const res = await axios.get(`/v1/api`);
      console.log("check>>",res)
    }
       fetchHelloWorld()
  },[])

    return (
    <>
         
         <Header />
         <Outlet />
      
    </>
 )}

export default App
