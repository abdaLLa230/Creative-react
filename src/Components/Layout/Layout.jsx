import React from 'react'
import style from"./Layout.module.css"
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';






export default function Layout() {
  return <>
   <Navbar/>



<div className="px-5 md:px-12 lg:px-20  my-5 cursor-pointer ">

  <Outlet/>
</div>



   <Footer/> 
</>  
}
