import { Navbar } from '../Navbar/Navbar'
import { LiNav } from '../../components/LiNavbar'


export const Header = () => {
    return(
        <header className="w-full h-30 flex justify-around mt-3 p-3 rounded-xl bg-sky-100 items-center">
            
            <h1 className='text-black '> Introducción a react 2025</h1>

            <Navbar >

            <ul className="flex gap-10">

                <LiNav route='/' content= 'Inicio'/>
                <LiNav route='Ejercicio1' content= 'Ejercicio1'/>
                <LiNav route='Ejercicio2' content= 'Ejercicio2'/>
                <LiNav route='Ejercicio3' content= 'Ejercicio3'/>
                <LiNav route='Ejercicio4' content= 'Ejercicio4'/>
                    

            </ul>

            </Navbar>

        </header>
    )
}