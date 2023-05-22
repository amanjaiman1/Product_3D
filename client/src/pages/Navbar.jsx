import React from "react";

export default function Navbar() {
    
    return (
        <div>
            <nav className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full h-16
            fixed top-0 left-0 right-0 z-10">
                <section className="navbar_row">
                        <a href="#"><img
                            src="./threejs.png"
                            alt="logo"
                            className="hover:animate-bounce w-10 h-9 m-5 absolute left-0 top-0"
                            />
                        </a>
                        <ul className="navbar absolute top-0 right-0 flex">
                            <li className="m-5 hover:font-bold"><a href="/Home">Home</a></li>
                            <li className="m-5 hover:font-bold"><a href="">About</a></li>
                            <li><div className="m-5 text-[20px]">
                            <ion-icon name="menu"></ion-icon>
                            </div></li>
                            {/* <div className="fixed bg-slate-800 text-white w-100% h-[100vh] p-16 flex text-40px tracking-[1px] overflow-hidden" id="ham">
                                <ul>
                                    <li className="mb-[15px] duration-500 hover:translate-y-[-5px]"><a href="/Customizer">Customizer</a></li>
                                    <li className="mb-[15px] duration-500 hover:translate-y-[-5px]"><a href="">My Designs</a></li>
                                    <li className="mb-[15px] duration-500 hover:translate-y-[-5px]"><a href="">Help</a></li>
                                    <li className="mb-[15px] duration-500 hover:translate-y-[-5px]"><a href="">Contacts</a></li>
                                </ul>
                            </div> */}
                            {/* <li className="m-5 hover:font-bold"><a href="">Menu</a></li> */}
                        </ul>
                </section>
            </nav>
        </div>
    )
}