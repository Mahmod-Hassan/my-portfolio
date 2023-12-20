import { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const routes = ["Home", "About", "Skill", "Projects", "Contact"];

  return (
    <aside className="bg-gray-800 text-gray-100 p-2 md:p-5 md:h-screen w-full sticky top-0">
      <div className="flex justify-between md:hidden">
        <img
          className="w-16 h-16 rounded-full bg-green-200 animate-vertical"
          src="https://i.ibb.co/DKmfKhQ/my-image-removebg-preview.png"
          alt="my-photo"
        />
        {open ? (
          <button
            className="text-xl"
            onClick={() => setOpen(false)}
            type="button"
          >
            <FaXmark />{" "}
          </button>
        ) : (
          <button
            className="text-xl"
            onClick={() => setOpen(true)}
            type="button"
          >
            <FaBars />
          </button>
        )}
      </div>

      <div className={` text-center ${open ? "block" : "hidden"} md:block`}>
        <img
          className="w-28 h-28 mx-auto hidden md:block rounded-full bg-green-200 animate-top"
          src="https://i.ibb.co/DKmfKhQ/my-image-removebg-preview.png"
          alt="my-photo"
        />
        <h3 className="text-xl">Mahmod Hasan</h3>
        <p className="text-sm break-all">mahmodhasan7788@gmail.com</p>
        <hr />
        <div className="flex justify-between my-5">
          <FaFacebook className="bg-blue-500 text-white w-8 h-8 p-2 rounded-full"></FaFacebook>
          <FaLinkedin className="bg-blue-500 text-white w-8 h-8 p-2 rounded-full"></FaLinkedin>
          <FaGithub className="bg-blue-500 text-white w-8 h-8 p-2 rounded-full"></FaGithub>
          <FaWhatsapp className="bg-blue-500 text-white w-8 h-8 p-2 rounded-full"></FaWhatsapp>
        </div>

        <ul className="space-y-5">
          <li className="flex md:flex-col gap-5 text-center md:text-left animate-left">
            {routes.map((route, i) => (
              <ScrollLink
                activeClass="active"
                offset={-100}
                spy={true}
                smooth={true}
                duration={500}
                to={route}
                key={i}
              >
                {route}
              </ScrollLink>
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Navbar;
