import React from 'react';
import styles from "./menubar.module.css";
import Navbar from "@/components/Navbar/index";
import Navfilter from "@/components/Navcontent/navfilter";
import Maincontauner from "@/components/Mainbar/index";

const menubar = ({children} :{children:React.ReactNode}) => {
  return (
    <div className={styles.menubar}>
    <Navbar/>
    <Navfilter/>
    <Maincontauner/>
    {children}
    
    </div>
  )
}

export default menubar