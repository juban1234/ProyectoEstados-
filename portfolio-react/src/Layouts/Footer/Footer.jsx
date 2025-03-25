import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { LiNav } from '../../components/LiNavbar'  

import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";


export const Footer  = () => {
  return (
    
    <footer className='w-full h-30 mt-auto flex justify-around bg-amber-400 items-center'> 

        <p className='text-black'>
            Desarrollado por: <strong> Juan Esteban Grajales  </strong>
        </p>

        <Navbar>
        
            <ul className='flex justify-between text-black'>

              <LiNav  route='Whatsapp'  content= {<IoLogoWhatsapp/>}/>
              <LiNav  route='Instagram'  content= {< AiFillInstagram/>} />
              <LiNav  route='Twitter'  content= {< FaXTwitter/>}/>
              <LiNav  route='Facebook'  content= {<FaFacebook />}/>


            </ul>
        
        </Navbar>

    </footer>



  )
}
