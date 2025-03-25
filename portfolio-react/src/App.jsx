
import { Home } from './pages/Home/Home'
import { Header } from './Layouts/Header/Header'
import { Footer } from './Layouts/Footer/Footer'



import { Routes, Route } from 'react-router-dom';
import { Ejercicio1 } from './pages/Ejercicio1/Ejercicio1';
import { Ejercicio2 } from './pages/Ejercicio2/Ejercicio2';
import { Ejercicio3 } from './pages/Ejercicio3/Ejercicio3';
import { Ejercicio4 } from './pages/Ejercicio4/Ejercicio4';
import { NotFound } from './pages/NotFound/NotFound';


import { Whatsapp } from './pages/Whatsapp/Whatsapp'
import { Instagram } from './pages/Instagram/Instagram';
import { Twitter } from './pages/Twitter/Twitter';
import { Facebook } from './pages/Facebook/Facebook';








export const App = () => {
  return (
    <>
      <Header />
      
      

      <Routes>

        <Route path="/"  element = {<Home/>} />

        <Route path="/Ejercicio1"  element = {<Ejercicio1/>} />
        <Route path="/Ejercicio2"  element = {<Ejercicio2/>} />
        <Route path="/Ejercicio3"  element = {<Ejercicio3/>} />
        <Route path="/Ejercicio4"  element = {<Ejercicio4/>} />

        <Route path="/Whatsapp"  element = {<Whatsapp/>} />
        <Route path="/Instagram"  element = {<Instagram/>} />
        <Route path="/Twitter"  element = {<Twitter/>} />
        <Route path="/Facebook"  element = {<Facebook/>} />
        


        <Route path="*"  element = {<NotFound/>} />
        
      </Routes>



      <Footer />
      

      

    </>
  )
}


