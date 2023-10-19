import { FaArrowUp } from "react-icons/fa6";
import { animateScroll as scroll } from "react-scroll";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import ContactMe from "../components/Contact";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills";

const Home = () => {
  function scrollToTop() {
    scroll.scrollToTop({
      duration: 1000,
      smooth: "easeInOutQuart", // Use different easing functions if desired
    });
  }
  return (
    <div className="relative">
      <Banner></Banner>
      <div className="mx-5 md:mx-10">
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <ContactMe></ContactMe>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-500 text-xl p-4 text-white rounded-full shadow-lg"
        type="button"
      >
        <FaArrowUp></FaArrowUp>
      </button>
    </div>
  );
};
export default Home;
