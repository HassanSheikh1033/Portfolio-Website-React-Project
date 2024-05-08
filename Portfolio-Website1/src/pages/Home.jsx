import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import About_img from '../assets/Rectangle.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import T_logo from '../assets/T_logo.png'


export default function Home() {
  return (
    <>
      {/* ------------------ Hero-Section -------------------- */}
      <section className='flex flex-col justify-center items-center pt-[92px] mt-8'>
        <div className='mt-[16px]'>
          {/* <div className='white-gradient' /> */}
          <h1 className=" text-center text-white text-[82px] font-bold font-['Syne']">
            Adaptive Logo Design <br /> for Your Brand
          </h1>
        </div>

        <div className="mt-[90px]">
          <button className="items-center flex justify-center w-[242px] gap-4 h-[65px]
           text-slate-100 text-[13px] font-bold font-['Rubik'] uppercase bg-orange-400
            rounded-[32.50px]">
            Explore Works
            <FaLongArrowAltRight />
          </button>
        </div>
      </section>


      {/* ------------------ About-Section -------------------- */}
      <section className='flex flex-row justify-center items-center mt-[180px]'>
        <div className='flex flex-col' >
          <div className='gap-8 flex flex-col'>
            <h1 className="text-white text-[56px] font-bold font-['Syne'] ">
              Let’s get know <br /> about me closer
            </h1>
            <p className="text-neutral-400 text-lg font-normal font-['Rubik'] leading-7 tracking-wide">
              Aaronn is a New York-based visual designer focusing on branding <br /> and visual identity.
              Her portfolio showcases her wide range of <br /> work, spanning books, posters and web design.
            </p>
          </div>
          <div className='mt-[52px]'>
            <button className="text-white font-semibold font-['Rubik']
              px-[50px] py-[15px] bg-orange-400 rounded-[50px]">
              Discover More About Me
            </button>
          </div>
        </div>

        <div className='ml-[120px]'>
          <img className="w-[454px] h-[506px] rounded-[30px]" src={About_img} />
        </div>

      </section>


      {/* ------------------ About-Section -------------------- */}
      <section className='mt-[200px]'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <h1 className="text-center text-white text-[64px] font-bold font-['Syne']" >
            My Projects Highlight
          </h1>
          <button className="items-center flex justify-center w-[222px] gap-8 h-[65px]
           text-slate-100 text-[13px] font-bold font-['Rubik'] uppercase border border-orange-400
            rounded-[32.50px]">
            Explore
            <FaLongArrowAltRight />
          </button>
        </div>

        <div className='m-[70px] grid grid-cols-2 items-center justify-center gap-12'>
          <div>
            <img src={card1} className="w-[420px] h-[520px] rounded-2xl" alt="" />
            <div className='flex gap-5 items-center mt-5'>
              <h3 className="text-white text-[20px] font-bold font-['Syne'] leading-4">Brand Journey Improvements</h3>
              <div className="w-9 h-[0px] border border-[#FF9142]"></div>
            </div>
            <div className='mt-[25px] flex gap-5'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Client:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Organic</p>
            </div>
            <div className=' flex gap-6'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Work:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Branding</p>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Logo Design</p>
            </div>
          </div>

          <div>
            <img src={card2} className="w-[420px] h-[520px] rounded-2xl" alt="" />
            <div className='flex gap-5 items-center mt-5'>
              <h3 className="text-white text-[20px] font-bold font-['Syne'] leading-4">Brand Grouping</h3>
              <div className="w-9 h-[0px] border border-[#FF9142]"></div>
            </div>
            <div className='mt-[25px] flex gap-5'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Client:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Organic</p>
            </div>
            <div className=' flex gap-6'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Work:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Branding</p>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Logo Design</p>
            </div>
          </div>

          <div>
            <img src={card3} className="w-[420px] h-[520px] rounded-2xl" alt="" />
            <div className='flex gap-5 items-center mt-5'>
              <h3 className="text-white text-[20px] font-bold font-['Syne'] leading-4">NFT Glimps</h3>
              <div className="w-9 h-[0px] border border-[#FF9142]"></div>
            </div>
            <div className='mt-[25px] flex gap-5'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Client:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Organic</p>
            </div>
            <div className=' flex gap-6'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Work:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Branding</p>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Logo Design</p>
            </div>
          </div>

          <div>
            <img src={card4} className="w-[420px] h-[520px] rounded-2xl" alt="" />
            <div className='flex gap-5 items-center mt-5'>
              <h3 className="text-white text-[20px] font-bold font-['Syne'] leading-4">Brand Suggestions</h3>
              <div className="w-9 h-[0px] border border-[#FF9142]"></div>
            </div>
            <div className='mt-[25px] flex gap-5'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Client:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Organic</p>
            </div>
            <div className=' flex gap-6'>
              <h3 className="text-zinc-600 text-[15px] font-normal font-['Rubik']">Work:</h3>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Branding</p>
              <p className="text-white text-[15px] font-normal font-['Rubik'] opacity-70">Logo Design</p>
            </div>
          </div>

        </div>
      </section>


      {/* ------------------ Testimonial-Section -------------------- */}
      <section className='mt-[180px] px-[40px]'>
        <div className='flex justify-between items-center'>
          <h1 className="text-white text-[64px] font-bold font-['Syne']">Testimonial</h1>
          <img src={T_logo} className="w-[120px] h-[85px]" alt="" />
        </div>

        <div className='flex flex-col gap-8 mt-9'>
          <p className=" text-neutral-400 text-lg font-normal font-['Rubik']">
            “Aaronn was fantastic to work with from start to finish. We were looking for a simple,
            stand-out logo and <br/> he delivered. I tried designing the logo myself thinking I wouldn’t
            need to pay the money for a <br/>  professional graphic designer but I was very wrong. Working
            with Aaronn was worth every penny and was <br/> surprisingly affordable! I remember him saying
            simplicity is key to a successful logo and boy he was right.<br/>  I can’t thank Aaronn enough
            for his effort and professionalism. I would recommend him to anyone looking <br/>  for a design!”
          </p>
          <h5 className="text-white text-[22px] font-bold font-['Syne']">
            -Martin lee
          </h5>
        </div>
      </section>

    </>
  )
}
