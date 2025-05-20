import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        <p className='uppercase text-sm tracking-widest text-zinc-600'>
            MY NAME IS
          </p>
          <h1 className='py-4 text-zinc-800'>
            JULIA DING<span className='text-sky-700'>.</span>
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
          I’m a developer with a strong quantitative background studying computer science and operations research as a C.P. Davis Scholar at Columbia University.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a href='https://www.linkedin.com/in/julialding/' target='_blank' rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 bg-neutral-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                </a>
                <a href='https://github.com/julialding' target='_blank' rel='noreferrer'
                >
                <div className='rounded-full shadow-lg shadow-gray-400 bg-neutral-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
                </a>
                <a href='mailto:julia.ding@columbia.edu' target='_blank' rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 bg-neutral-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                </a>
                <Link href='/resume.pdf'>
                <div className='rounded-full shadow-lg shadow-gray-400 bg-neutral-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                </div>
                </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;