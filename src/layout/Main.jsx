import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";

const Main = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-4 lg:col-span-3">
        <Navbar></Navbar>
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-9">
        <Home></Home>
      </div>
    </div>
  );
};
export default Main;
