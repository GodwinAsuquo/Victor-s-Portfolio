import React, { useEffect } from 'react'

const UseDarkMode = () => {
  
useEffect(()=>{
  const root = window.document.documentElement;

  root.classList.add('dark')
},[])

}

export default UseDarkMode