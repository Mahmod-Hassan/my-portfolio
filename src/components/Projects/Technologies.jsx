import React from "react";

const Technologies = ({ technologies }) => {
  const borderClasses = [
    "border-green-500",
    "border-cyan-500",
    "border-indigo-500",
    "border-yellow-500",
    "border-violet-500",
  ];
  return (
    <>
      {technologies.map((technology, index) => (
        <button
          className={`border ${
            borderClasses[index % borderClasses.length]
          } m-2 px-2 rounded-full text-sm`}
          key={index}
        >
          {technology}
        </button>
      ))}
    </>
  );
};
export default Technologies;
