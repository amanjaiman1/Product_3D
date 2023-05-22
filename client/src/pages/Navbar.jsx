import React from "react";

export default function Navbar() {
    
    return (
        <div>
            <nav className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full h-16
            fixed top-0 left-0 right-0 z-10">
                <section className="navbar_row">
                        <img
                            src="./threejs.png"
                            alt="logo"
                            className="hover:animate-bounce w-10 h-9 m-5 absolute left-0 top-0"
                            />
                        
                        <ul className="navbar absolute top-0 right-0 flex">
                            <li className="m-5 hover:font-bold"><a href="/Home">Home</a></li>
                            <li className="m-5 hover:font-bold"><a href="">About</a></li>
                            <li className="m-5 hover:font-bold"><a href="">Designs</a></li>
                            <li className="m-5 hover:font-bold"><a href="">Contact us</a></li>
                            
                        </ul>
                </section>
            </nav>
        </div>
    )
}