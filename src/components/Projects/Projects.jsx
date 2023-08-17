// import { Element, animateScroll, scroller } from "react-scroll";
import { useEffect, useState } from "react";
import Features from "./Features";
import Links from "./Links";
import Technologies from "./Technologies";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div name="Projects" className="m-16">
      <h1 className="text-3xl font-bold text-center mb-10">Projects</h1>
      {projects.length &&
        projects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row mb-12">
            <div className="basis-2/3">
              <h1 className="text-xl font-bold">{project.title}</h1>
              <h3 className="font-medium">{project.type}</h3>
              <Technologies technologies={project.technologies} />
              <Features features={project.features} />
              <Links links={project.links}></Links>
            </div>
            <div className="basis-1/3 h-[300px] border border-red-400 overflow-hidden hover:overflow-scroll">
              <img className="w-full" src={project?.img} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
};
export default Projects;
