import { Navbar } from '../Navbar/Navbar';  
import { LiNav } from '../../components/LiNavbar';  

export const Header = () => {
    return (
        <header className="w-full h-30 bg-gradient-to-r from-cyan-200 to-sky-300 flex justify-around mt-3 p-4 rounded-xl 
                           shadow-lg border border-blue-300 items-center">
            
            <h1 className="text-white font-semibold text-xl"> Introducción a React 2025 </h1>

            <Navbar>
                <ul className="flex gap-8">
                    <LiNav route='/' content='Inicio' className="text-white hover:text-gray-800 transition-colors duration-200" />
                    <LiNav route='Ejercicio1' content='Ejercicio1' className="text-white hover:text-gray-800 transition-colors duration-200" />
                    <LiNav route='Ejercicio2' content='Ejercicio2' className="text-white hover:text-gray-800 transition-colors duration-200" />
                    <LiNav route='Ejercicio3' content='Ejercicio3' className="text-white hover:text-gray-800 transition-colors duration-200" />
                    <LiNav route='Ejercicio4' content='Ejercicio4' className="text-white hover:text-gray-800 transition-colors duration-200" />
                </ul>
            </Navbar>

        </header>
    );
};
