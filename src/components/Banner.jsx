import { FaDownload } from "react-icons/fa6";

const Banner = () => {
  return (
    <div
      name="Home"
      className="flex bg-[url('https://i.ibb.co/yFByW2M/banner.png')] bg-no-repeat bg-cover text-center items-center text-white h-screen"
    >
      <div className="grid place-items-center">
        <h3 className="text-2xl">Welcome I am</h3>
        <h1 className="text-blue-500 text-3xl md:text-5xl font-bold">
          Mahmod Hasan
        </h1>
        <h3 className="text-3xl text-yellow-600 font-bold">
          Mern Stack Developer
        </h3>
        <p className="my-5 text-gray-400 px-20">
          As a MERN stack developer, I specialize in building full-stack web
          applications using MongoDB, Express, React, and Node.js. With a
          passion for coding and a dedication to clean, efficient, and
          well-organized code, I strive to create applications that deliver
          exceptional user experiences
        </p>

        <a
          target="_blank"
          href="https://drive.google.com/file/d/1aK0LaUybHyFteq3JoLljbODDXBLALnmw/view?usp=drive_link"
        >
          <button className="flex items-center px-4 gap-4 py-2 bg-blue-500 text-gray-50 rounded">
            <span>Download Resume</span> <FaDownload></FaDownload>
          </button>
        </a>
        {/* <button onClick={handleDownload}>Download Resume</button> */}
      </div>
    </div>
  );
};
export default Banner;
// href="https://drive.google.com/file/d/1aK0LaUybHyFteq3JoLljbODDXBLALnmw/view?usp=sharing"
