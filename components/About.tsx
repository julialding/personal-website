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
            passions, applications, communities. As an avid{" "}
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://hackclub.com"
            >
              Hack Clubber
            </a>
            <sup>1 </sup>
            and puzzle enthusiast, I love{" "}
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://arxiv.org/abs/2302.04389"
            >
              exploring
            </a>{" "}
            the intersection of computer science and math. I enjoy{" "}
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://schoolhouse.world/u/7977"
            >
              teaching
            </a>
            <span> </span>
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="http://mtyacademy.com/home.html"
            >
              other
            </a>
            <span> </span>
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="http://defineinclude.com/home"
            >
              students,
            </a>
            <span> </span>
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://lasa.hackclub.com/"
            >
              leading
            </a>
            <span> </span>
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://www.lasacsclubs.com/women-in-computer-science"
            >
              clubs
            </a>
            <span> </span>
            and leadership{" "}
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="http://lasastuco.org/"
            >
              organizations
            </a>
            , and<span> </span>
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://fiveable.me"
            >
              interning
            </a>
            <span> </span>
            to build solutions in the edtech space. Currently, I am a software engineer intern at{" "}
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://batstoi.com/"
            >
              BATS-TOI
            </a>{" "} and will be working at Google as a STEP intern this upcoming summer.
          </p>
          <p className="py-2 text-zinc-600">
            In my free time, I play the cello in orchestra and as part of the
            Arcesso String Quartet. I'm an<span> </span>
            <a
              className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
              href="https://www.instagram.com/hingryjulia/"
            >
              absolute foodie
            </a>
            <span> </span>
            and will give live on-demand food reviews (Gordon Ramsay style if
            desired). I'm always up for a game of Word Hunt, Set, or ERS and am
            a big fan of 0.5 Muji gel pens, the word bamboozled, taking pictures
            (especially of food), bad puns, boba milk tea, chicken fettuccine,
            and long lists. Feel free to reach out!
          </p>
          <p className="py-2 text-xs text-zinc-600">
            <sup>1</sup>Hacking: The (non-malicious) use of technology to solve
            real-world problems.
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
