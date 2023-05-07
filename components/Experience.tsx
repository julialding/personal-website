import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Experience = () => {
  return (
    <div id='experience' className='w-full md:h-screen px-6 overflow-hidden flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-sky-700'>
            02
          </p>
          <h2 className='py-4'>Experience<span className='text-sky-700'>.</span></h2>
          <p className='group py-2 text-zinc-600'>
            Experience accordion coming soon! In the meantime, check out my<span> </span>
            <a className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800" href="https://linkedin.com/in/julialding/">LinkedIn</a><span> </span>
            or <a className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800" href="https://github.com/julialding/">Github</a>.<span> </span>Relevant courses include:
          </p>
          <ul className='pl-4'>
            <li>Advanced Computer Science II (data structures)</li>
            <li>Computational Problem Solving</li>
            <li>Web Programming</li>
            <li>UNIX Operating Systems</li>
            <li>AP Computer Science A</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;