import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";

const Main = () => {
  const routes = [""];
  return (
    <div className="grid md:grid-cols-7 lg:grid-cols-5">
      <div className="md:col-span-2 lg:col-span-1">
        <Navbar></Navbar>
      </div>
      <div className="md:col-span-5 lg:col-span-4">
        <Home></Home>
      </div>
    </div>
  );
};
export default Main;
