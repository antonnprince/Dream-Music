import { useState } from "react"
import logo from "../assets/mainlogo.png"
import home from "../assets/hme.png"
import library from "../assets/library.png"
import trends from "../assets/trends.png"
import discover from "../assets/discover.png"
import settings from "../assets/settings.png"
import logout from "../assets/logout.png"


const LeftBar=()=>{

    return(
        <div className="w-1/5  bg-[#0A0A0A] h-full flex flex-col px-8 py-4 tracking-wide">
                
                <div className="flex flex-row mx-auto mt-4 space-x-4 mb-24 justify-center">
                        <img src={logo} className="w-12 h-16 mr-4"/>
                        <h1 className="text-[#E11D48] font-extrabold text-4xl mt-2">Dream<span className="text-white">Music</span></h1>
                </div>

                <div className="flex flex-col text-left text-[#F8FAFC] ">
                    <h2 className="text-normal font-semibold">MENU</h2>  
                    <ul className="text-xl">
                        <li className="flex flex-row mt-2">
                            <img src={home} className="w-6 h-6 mr-6"/>
                            Home
                        </li>
                        <li className="flex flex-row mt-2">
                            <img src={trends} className="w-6 h-6 mr-6"/>
                            Trends
                        </li>
                        <li className="flex flex-row mt-2">
                            <img src={library} className="w-6 h-6 mr-6"/>
                            Library
                        </li>
                        <li className="flex flex-row mt-2">
                        <img src={discover} className="w-6 h-6 mr-6"/>
                            Discover
                        </li>
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

export default LeftBar