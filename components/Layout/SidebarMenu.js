import React from 'react'
import { useState } from 'react';
import Link from 'next/link'

function SidebarMenu() {
    const [open, setOpen] = useState(true);
    const Menus = [
        {title: "Dashboard", src: "dashboard"},
        {title: "Scans", src: "scans"},
        {title: "New Scan", src: "/scans" },
        {title: "Settings", src: "settings", gap: true},
    ]
  return (
    <>
        <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen bg-slate-100 relative`}>
            <img src='../images/icons/control.png' className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
            {/* logo */}
            {/* <div>
                <img src='../../images/ethnosLogo.png' className={`cursor-pointer duration-500`} alt={`logo`} />
            </div> */}
            <ul className='pt-6 ml-6'>
                {Menus.map((menu, index) =>(
                    <li key={index} className={`text-gray-400 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-200 hover:font-bold rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && 'bg-slate-300'}`}>
                        <img src={`../../images/icons/${menu.src}.png`} />
                        <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>

        
    </>
  )
}

export default SidebarMenu