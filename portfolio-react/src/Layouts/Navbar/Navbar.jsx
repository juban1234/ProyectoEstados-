import React from 'react'


export const Navbar = ({ children }) => { 
    return (
        <nav className="w-full max-w-screen-lg bg-white/30 p-3 rounded-lg shadow-md">
            {children}
        </nav>
    );
};

