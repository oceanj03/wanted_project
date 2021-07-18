import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import MobileNav from '../../organisms/MobileNav/MobileNav'
import Navbar from '../../organisms/Navbar/Navbar'

export default function Main() {

  const isMobile = () => {
    return window.innerWidth <= 882;
  }

  const useIsMobile = () => {
    const [ mobileSize , setMobileSize ] = useState(isMobile());

    const handleSize = useCallback(
      () => {
        if(mobileSize !== isMobile()){
        setMobileSize(isMobile());
        }
      },
    [mobileSize]
  );

  useEffect (()=>{
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener("resize",handleSize);
    };
  },[handleSize]);

  return mobileSize;
  }


  return (
    <div>
      {useIsMobile() ? <MobileNav /> :  <Navbar />}
    </div>
  )
}
