import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-sky-700">03</p>
        <h2 className="py-4">
          Projects<span className="text-sky-700">.</span>
        </h2>
        <div className='flex flex-col lg:flex-row items-center justify-evenly max-w-full m-auto py-3'>
            <div className="w-full lg:w-[31%] mb-4 lg:mb-0">
                <div className='rounded-lg shadow-lg shadow-gray-300 bg-neutral-200 h-full p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <h3 className="mb-2"><a
                      className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
                      href="https://github.com/julialding/oratio"
                    >
                      Oratio
                    </a>
                    </h3>
                    <p className='break-words'>A mobile semantic speech-to-text captioning app that won first place at hackNEHS.
                    Prototyped with Figma, developed with React Native.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-[31%] mb-4 lg:mb-0">
                <div className='rounded-lg shadow-lg shadow-gray-300 bg-neutral-200 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <h3 className="mb-2"><a
                        className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
                        href="https://juliading.dev"
                      >
                        juliading.dev (v1)
                      </a>
                  </h3>
                  <p className='break-words'>
                    The first iteration of this personal site, built with Next.js and TailwindCSS, hosted with Vercel. Check out the<span> </span>
                      <a
                        className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
                        href="https://github.com/julialding/personal-website"
                      >
                        source code
                      </a>
                      <span> </span>on Github!
                  </p>
                </div>
            </div>
            <div className="w-full lg:w-[31%] mb-4 lg:mb-0">
                <div className='rounded-lg shadow-lg shadow-gray-300 bg-neutral-200 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <h3 className="mb-2"><a
                        className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
                        href="https://arxiv.org/abs/2302.04389"
                      >
                        DAI Research
                      </a>
                  </h3>
                  <p className='break-words'>
                    Performed a comparative analysis of the methods used to verify properties of Distributed AI Systems. Authored paper, presented at research symposium.
                  </p>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Projects;
