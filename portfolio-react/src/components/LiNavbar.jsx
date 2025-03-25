import React from 'react'
import { NavLink } from "react-router-dom";

export const LiNav = ({content, Listyles, route}) => {
  return (
    
    <li  >
      <NavLink className={Listyles} to = {route} > {content} </NavLink>
    </li>

   
  )
}

