import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-sky-700">03</p>
        <h2 className="py-4">
          Projects<span className="text-sky-700">.</span>
        </h2>
        <p className="group py-2 text-zinc-600">
          Project grid coming soon! In the meantime, check out my<span> </span>
          <a
            className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
            href="https://linkedin.com/in/julialding/"
          >
            LinkedIn
          </a>
          <span> </span>
          or{" "}
          <a
            className="underline underline-offset-2 decoration-2 decoration-sky-700 hover:decoration-[3px] hover:decoration-sky-800"
            href="https://github.com/julialding/"
          >
            Github
          </a>
          .<span> </span>
        </p>
      </div>
    </div>
  );
};

export default Projects;
