import { FaCheck } from "react-icons/fa6";

const Skills = () => {
  const frontend = ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"];
  const backend = [
    "Node js",
    "MongodDB",
    "Express.js",
    "Mongoose",
    "Firebase",
    "JWT",
  ];
  const tools = ["Git", "Vs Code", "Chrome Dev Tools"];
  return (
    <div name="Skill" className="md:my-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Front-End</h3>
          <ul>
            {frontend.map((f, i) => (
              <li key={i} className="flex gap-2 items-center">
                <FaCheck /> {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Back-End</h3>
          <ul>
            {backend.map((b, i) => (
              <li key={i} className="flex gap-2 items-center">
                <FaCheck /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Back-End</h3>
          <ul>
            {tools.map((tool, i) => (
              <li key={i} className="flex gap-2 items-center">
                <FaCheck /> {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Skills;
