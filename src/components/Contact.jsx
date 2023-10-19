import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaSquarePhone,
  FaWhatsapp,
} from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div name="Contact" className="my-16">
      <h1 className="text-3xl font-bold text-center my-10">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-5 md:w-1/2">
          <h3 className="text-xl font-medium">Address</h3>
          <p>Chittagong, Bangladesh</p>
          <FaSquarePhone className="text-xl mr-2 text-gray-800 inline" />{" "}
          +8801314890047 <br />
          <FaSquarePhone className="text-xl mr-2 text-gray-800 inline" />{" "}
          +8801962700078
          <br />
          <FaRegEnvelope className="text-xl mr-2 text-gray-800 inline" />{" "}
          mahmodhasan7788@gmail.com
          <h3 className="mt-5 text-xl font-medium">Follow Me</h3>
          <div className="flex gap-4 text-white">
            <a
              href="https://www.linkedin.com/in/mahmod-hasan-35a599259/"
              target="_blank"
            >
              {" "}
              <FaLinkedin className="bg-gray-800 w-8 h-8 p-2 rounded-full" />
            </a>
            <a href="https://www.facebook.com/Mahmod90047/" target="_blank">
              {" "}
              <FaFacebook className="bg-gray-800 w-8 h-8 p-2 rounded-full" />
            </a>

            <a href="https://github.com/Mahmod-Hassan" target="_blank">
              {" "}
              <FaGithub className="bg-gray-800 w-8 h-8 p-2 rounded-full" />
            </a>
            <a href="https://web.whatsapp.com/" target="_blank">
              <FaWhatsapp className="bg-gray-800 w-8 h-8 p-2 rounded-full" />
            </a>
          </div>
        </div>
        <form className="grid md:w-1/2 gap-5">
          <input className="border p-2" type="text" placeholder="name" />
          <input className="border p-2" type="text" placeholder="email" />
          <textarea
            className="border p-3 block w-full"
            col="30"
            row="30"
            placeholder="your message.."
          />
          <button className="p-2 bg-gray-800 text-white rounded" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactMe;
