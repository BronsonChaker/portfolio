import { Link } from "react-router";

export default function ProjectListItem({
  image,
  name,
  date,
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
      <div className="flex flex-col p-5 gap-3">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-sm text-gray-400">{description}</p>
        <div className="flex gap-2 items-start justify-start">
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
