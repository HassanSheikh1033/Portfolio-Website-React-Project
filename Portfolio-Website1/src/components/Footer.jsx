import React from 'react'
import logo from '../assets/Brand-logo.svg'
import frame from '../assets/Frame.png'

export default function Footer() {
    return (
        <section className='bg-[#131313] p-[60px] mt-[150px] relative'>
            <div className='flex justify-center flex-col items-center'>
                <h2 className="text-center text-orange-400 text-[30px] font-bold font-['Syne'] mt-[140px]">
                    Get in Touch With Us
                </h2>
                <h1 className="text-center text-white text-[64px] font-bold font-['Syne'] underline mt-[20px]">
                    info@aaronn.com
                </h1>
            </div>

            <div className='mt-[150px] flex justify-between items-center px-[40px]'>
                <img src={logo} className="w-[225px] h-[115px]" alt="" />
                <div className="text-white text-[25px] font-bold font-['Syne']">
                    <p>Street Avenue 21, CA</p>
                    <p>0-8-00-888- <br /> 000</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className="text-white text-[25px] font-bold font-['Syne']">+9 0283353</p>
                    <img src={frame} alt="" />
                </div>
            </div>

            <div className="w-[1145.84px] h-[0px] border border-[#949494] mt-[70px] mx-auto"></div>

            <div className='mt-[40px]'>
                <p className="text-center text-white text-[22px] font-bold font-['Syne']">
                    © 2023. SyCo-Assassin. All rights reserved.
                </p>
            </div>

        </section>
    )
}
