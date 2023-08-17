import React from "react";

const AboutMe = () => {
  return (
    <div name="About" className="">
      <h1 className="text-3xl text-center my-10 font-bold">About Me</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img className="" src="https://i.ibb.co/Dzr0YHh/aboutme.png" alt="" />
        </div>
        <div className="lg:w-1/2 p-10 lg:p-0">
          <p>
            Hello! I am Mahmod Hasan Junior MERN Stack Developer . As a Junior
            Web Developer, I am eager to bring my technical skills and passion
            for creating dynamic, user-friendly websites to a challenging and
            dynamic work environment. With a solid understanding of HTML, CSS,
            JavaScript, and React Js and a growing knowledge of back-end
            technologies like Node Js, and Express Js. I am confident in my
            ability to build and maintain websites that meet the needs of users
            and clients alike. I am a quick learner and always eager to take on
            new challenges, and I thrive in collaborative environments where I
            can work with designers, senior developers, and other stakeholders
            to bring projects to life. If you are looking for a Junior Web
            Developer who is dedicated, detail-oriented, and eager to grow and
            learn, please do not hesitate to reach out. I would be thrilled to
            bring my skills and enthusiasm to your team!
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
