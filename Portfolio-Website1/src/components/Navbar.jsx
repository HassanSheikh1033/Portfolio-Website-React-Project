import React from 'react'
import Brand_Logo from '../assets/brand-logo.svg'

export default function Navbar() {
    return (
        <section className='flex flex-row justify-between items-center p-[20px] bg-grey-500'>
            <div className="flex items-start justify-start">
                <img className="w-[125px] h-[22px] relative" src={Brand_Logo} alt="" />
            </div>
            <div className="flex justify-between items-center gap-12">
                <div className="opacity-50 text-white text-sm font-medium font-['Rubik'] uppercase" >
                    <ul className='flex justify-between items-center gap-12'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">My works</a>
                    </ul>
                </div>
                <div className='w-[102px] h-[37px] pl-[35px] pr-9 py-[15px] bg-black bg-opacity-40
                     rounded-[30px] border-2 border-white border-opacity-30 justify-center items-center
                     inline-flex'>
                    <button className="opacity-80 text-white text-[12px] font-bold font-['Rubik'] uppercase">
                        contact
                    </button>
                </div>
            </div>
        </section>
    )
}

