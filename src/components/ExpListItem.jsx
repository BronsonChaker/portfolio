export default function ExpListItem({ image, name, role, date, grade }) {
  return (
    <div className="flex flex-row mt-5 w-full">
      {/* Logo */}
      <div className="flex rounded-full justify-start items-center w-[10%]">
        <img
          src={image}
          alt=""
          className="rounded-full h-13 border-4 p-1.5 border-[#E5E5E5]"
        />
      </div>

      {/* Name & Degree */}
      <div className="flex flex-col items-start justify-center w-[60%]">
        <p className="font-bold">{name}</p>
        <p>{role}</p>
        <p>{grade}</p>
      </div>

      {/* Timeline */}
      <div className="flex justify-end w-[30%]">
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
}
