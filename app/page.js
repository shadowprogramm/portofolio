"use client";

import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image";
import photo from '../public/img/chr.jpg';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  console.log(darkMode);
  return (
    <div className={darkMode ? "dark": ""}>
    <main className="bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-800">
       <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>DeployBy</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/> 
            </li>
            <li>
              <a href="#" className='bg-gradient-to-r from-cyan-400 to-teal-500 px-4 py-2 rounded-md mx-5'> Resume </a>
              </li>
          </ul>
        </nav>
        

        <div className='text-center p-10'>
          <h2 className='text-5xl text-teal-600 font-medium'>Christson AWANYO</h2>
          <h3 className='text-2xl py-2'>Data Scientist and Web developper</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            Currently doing a PhD in Machine learning
          </p>
        </div>


        <div className='text-5xl flex justify-center gap-16 text-gray-600 my-10'>
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </div>

        <div className='relative bg-gradient-to-b from-teal-500 mx-auto w-80 h-80 rounded-full overflow-hidden'>
          <Image src={photo} layout='fill' objectFit='cover'/>
        </div>
       </section>

       <section>
        <div className='my-10'>
          <h3 className='text-3xl py-1 text-center'>  Services I offer </h3>

          <p className='text-md leading-8 text-gray-400'>
            This year has been a little bit weird for me. Things did not go the way
            I planned it. But I m gratefull for everthing I have received, learned and losed.
            I have made a lot of mistake. But God has teached me so much <span className='text-teal-400'>lesson</span>
          </p>
        </div>

        <div className='lg:flex gap-10'>
          <div className='text-center shodow-xl p-10 rounded-xl my-10 bg-red-50'>
            <h3 className='text-large font-medium pt-8 pb-2'> Programming </h3>
            <p className='py-2'>Programming is the top of art</p>
            <h4 className='py-4 text-teal-600'>Programming language</h4>
            <p className='text-gray-800 py-1'>Python</p>
            <p className='text-gray-800 py-1'>Javascrip</p>
            <p className='text-gray-800 py-1'>Java</p>
          </div>

          <div className='text-center shodow-xl p-10 rounded-xl my-10 bg-red-50'>
            <h3 className='text-large font-medium pt-8 pb-2'> Programming </h3>
            <p className='py-2'>Programming is the top of art</p>
            <h4 className='py-4 text-teal-600'>Programming language</h4>
            <p className='text-gray-800 py-1'>Python</p>
            <p className='text-gray-800 py-1'>Javascrip</p>
            <p className='text-gray-800 py-1'>Java</p>
          </div>
        </div>
       </section>



    </main>
    </div>
  )
}
