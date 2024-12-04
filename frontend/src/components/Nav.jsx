import { useState } from "react"
import logo from "../assets/mainlogo.png"

const Nav=()=>{

    return(
        <div className="w-1/5  bg-[#0A0A0A] h-full flex flex-col px-8 py-4 tracking-wide">
                
                <div className="flex flex-row mx-auto mt-4 space-x-4 mb-24 justify-center">
                        <img src={logo} className="w-12 h-16"/>
                        <h1 className="text-[#E11D48] font-bold text-5xl mt-2">Dream<span className="text-white">Music</span></h1>
                </div>

                <div className="flex flex-col text-left text-[#F8FAFC] ">
                    <h2 className="text-lg font-semibold my-4">MENU</h2>  
                    <ul className="text-xl">
                        <li>Home</li>
                        <li>Trends</li>
                        <li>Library</li>
                        <li>Discover</li>
                    </ul>
                </div>

                <div className="flex flex-col text-left text-[#F8FAFC] mt-auto">
                    <h2 className="text-lg font-semibold my-4">GENERAL</h2>  
                    <ul className="text-xl">
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </div>

        </div>
    )
}

export default Nav