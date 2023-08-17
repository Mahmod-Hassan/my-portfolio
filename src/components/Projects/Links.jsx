import React from "react";

const Links = ({ links }) => {
  return (
    <>
      {links.map((link, i) => (
        <a
          key={i}
          className="shadow-md px-4 py-1 m-5 inline-block"
          target="_blank"
          href={link.url}
        >
          <button type="button">{link.title}</button>
        </a>
      ))}
    </>
  );
};
export default Links;
