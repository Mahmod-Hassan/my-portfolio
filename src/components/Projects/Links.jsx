const Links = ({ links }) => {
  return (
    <>
      {links.map((link, i) => (
        <a
          key={i}
          className="shadow-md hover:shadow-lg hover:shadow-gray-800/25 px-4 py-1 m-5 inline-block"
          target="_blank"
          href={link.url}
          rel="noreferrer"
        >
          <button className="hover:font-semibold" type="button">
            {link.title}
          </button>
        </a>
      ))}
    </>
  );
};
export default Links;
