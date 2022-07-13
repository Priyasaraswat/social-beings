import React, { Suspense, lazy, useContext } from "react";
import "./Home.css"
// import Topbar from '../../components/topbar/Topbar'

// import Centerbar from '../../components/centerbar/Centerbar'
// import Rightbar from '../../components/rightbar/Rightbar'
const Rightbar=lazy(()=>import("../../components/rightbar/Rightbar"));
const Topbar=lazy(()=>import("../../components/topbar/Topbar"));
const Centerbar=lazy(()=>import("../../components/centerbar/Centerbar"));

function Home() {
  return (<
    Suspense fallback={<span>Loading....</span>}>
    
    <div className='home'>
        <Topbar />
        <div className='home-container'>
         
          <Centerbar />
          <Rightbar />
        </div>
    </div>
    </Suspense>
   
  )
}

export default Home