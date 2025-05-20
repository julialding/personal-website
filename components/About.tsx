import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen px-6 overflow-hidden flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-sky-700">01</p>
          <h2 className="py-4">
            About Me<span className="text-sky-700">.</span>
          </h2>
          <p className="group py-2 text-zinc-600">
            Whether literally or figuratively, I'm always building: knowledge,
            passions, applications, communities. I've interned at Google for the past 
            two summers and was an AI fellow at Verizon this past year. At Columbia, 
            I serve on the Executive Board of our Quant Group and IEEE and also help 
            to lead our Women in Computer Science Club and Application Development 
            Initiative Club. I serve as the Professional Development & Alumni 
            Affairs Representative on our Engineering Student Council, dance as part of
            Orchesis, and am a Resident Adviser.
          </p>
          <p className="py-2 text-zinc-600">
            In my free time, I play the cello and piano. I'm an<span> </span>
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://www.instagram.com/hingryjulia/"
            >
              absolute foodie
            </a>
            <span> </span>
            and enjoy eating cheese, journaling, and trying new restaurants and cafes. 
            Feel free to reach out!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-zinc-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-auto h-auto m-auto shadow-xl shadow-gray-400 bg-neutral-200 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/juliading24.jpg"
            height="300"
            width="300"
            className="roundedxl"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
