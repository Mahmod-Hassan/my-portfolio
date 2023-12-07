import React from "react";

const AboutMe = () => {
  return (
    <div name="About">
      <h1 className="text-3xl text-center my-10 font-bold">About Me</h1>
      {/* <div className="flex flex-col lg:flex-row"> */}
      {/* <div className="lg:w-1/2">
          <img
            className="hidden md:block"
            src="https://i.ibb.co/Dzr0YHh/aboutme.png"
            alt=""
          />
        </div> */}
      <div className="px-10 space-y-6 text-lg">
        <p>
          My name is Mahmod Hasan from Chittagong, Bangladesh. Now I am studying
          for my 4th years of political science at Syedabad Adarsha
          College.Though, I am from Non-CSE Background I have too much interest
          in programmin. That's why I have been learning programming for a year
          besides my studies.{" "}
        </p>
        <p>
          Recently I have completed a{" "}
          <span className="font-semibold">
            FullStack web development course
          </span>{" "}
          from programming hero. Where I have learned{" "}
          <span className="font-semibold">
            Html, Css, JavaScript, React Js, Node Js
          </span>{" "}
          and many more. And I have completed 7+ full stack projects for
          assigntment purpose. Now I am exploring{" "}
          <span className="font-semibold">Redux and Next Js</span>.{" "}
        </p>
        <p>
          Now I am seeking a job for similar role. Because I want to sort out my
          career and see myself elsewhere after 5 years.
        </p>
      </div>
    </div>
    // </div>
  );
};
export default AboutMe;
