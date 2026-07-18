import { Link } from "react-router";

export default function ProjectListItem({
  image,
  name,
  description,
  technologies,
}) {
  return (
    <div className="border border-stone-200 rounded-lg">
      {/* Image & Soure Code Link */}
      <div>
        <img src={image} alt="" className="rounded-t-lg" />
        <Link to=""></Link>
      </div>

      {/* Project Name, Timeline, and Description */}
      <div className="flex flex-col p-6 gap-3 min-h-62.5">
        <div>
          <h1 className="font-semibold text-md">{name}</h1>
          <Link></Link>
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
