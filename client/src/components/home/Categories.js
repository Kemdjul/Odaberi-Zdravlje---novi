import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className="w-full sm:h-[600px] sm:grid sm:grid-cols-2 sm:grid-rows-2 flex flex-col text-white bg-black">
        <Link 
            to="/trgovina" state={{ kategorija: 'oxygen-optimal' }}  
            className="w-full h-full flex flex-col px-[100px] py-[64px] gap-[64px] hover:text-zelena transition-all" id="kategorija-1"
        >
            <h3 className="text-5xl font-semibold z-10">Oxygen Optimal</h3>
            <p className="z-10 text-white">Više...</p>
        </Link>
        <Link 
            to="/trgovina" state={{ kategorija: 'dodaci-prehrani' }}  
            className="w-full h-full flex flex-col px-[100px] py-[64px] gap-[64px] hover:text-zelena transition-all" id="kategorija-2"
        >
            <h3 className="text-5xl font-semibold z-10">Dodaci prehrani</h3>
            <p className="z-10 text-white">Više...</p>
        </Link>
        <Link 
            to="/trgovina" state={{ kategorija: 'cajevi-i-tinkture' }}  
            className="w-full h-full flex flex-col px-[100px] py-[64px] gap-[64px] hover:text-zelena transition-all" id="kategorija-3"
        >
            <h3 className="text-5xl font-semibold z-10">Čajevi i tinkture</h3>
            <p className="z-10 text-white">Više...</p>
        </Link>
        <Link 
            to="/trgovina" state={{ kategorija: 'gelovi-i-kreme' }}  
            className="w-full h-full flex flex-col px-[100px] py-[64px] gap-[64px] hover:text-zelena transition-all" id="kategorija-4"
        >
            <h3 className="text-5xl font-semibold z-10">Gelovi i kreme</h3>
            <p className="z-10 text-white">Više...</p>
        </Link>
    </div>
  )
}

export default Categories