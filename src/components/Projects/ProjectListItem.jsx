import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function ProjectListItem({
  image,
  name,
  website_link,
  github_frontend,
  github_backend,
  description,
  technologies,
}) {
  return (
    <div className="border border-stone-200 rounded-lg">
      {/* Image & Soure Code Link */}
      <div className="relative z-10">
        <img src={image} alt="" className="rounded-t-lg w-100 h-50" />
        <Link to=""></Link>
        <div className="absolute z-20 bottom-0 left-0">
          <div className="flex flex-row gap-2 p-2">
            {website_link && (
              <div className="flex flex-row items-center gap-1 text-white bg-black px-2 py-1 rounded-full text-sm hover:opacity-80 hover:duration-200">
                <FaExternalLinkAlt />{" "}
                <Link to={website_link} className="text-sm">
                  <span>{website_link}</span>
                </Link>
              </div>
            )}

            {github_frontend && (
              <div className="flex flex-row items-center gap-1 text-white bg-black px-2 py-1 rounded-full text-sm hover:opacity-80 hover:duration-200">
                <FaGithub />{" "}
                <Link to={github_frontend}>
                  {" "}
                  <span>GitHub (Frontend)</span>
                </Link>
              </div>
            )}

            {github_backend && (
              <div className=" flex flex-row items-center gap-1 text-white bg-black px-2 py-1 rounded-full text-sm hover:opacity-80 hover:duration-200">
                <FaGithub />{" "}
                <Link to={github_backend} className="text-sm">
                  {" "}
                  <span>GitHub (Backend)</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Name, Timeline, and Description */}
      <div className="flex flex-col p-6 gap-3 min-h-62.5">
        <div>
          <h1 className="font-semibold text-md">{name}</h1>
          <Link></Link>
          <div className="flex flex-col justify-center gap-1"></div>
        </div>

        <div>
          <p className="text-xs text-gray-400 leading-6">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 items-end justify-start">
          {technologies.map((text, index) => (
            <p
              key={index}
              className="flex border rounded-xl border-stone-200 px-2 py-1 text-xs font-medium"
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Project Technologies */}
    </div>
  );
}
