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
      <div className="w-full flex items-start justify-between">
        {/* Name & Degree */}
        <div className="flex flex-col items-start justify-center">
          <p className="font-semibold text-md">{name}</p>
          <p className="font-normal text-sm text-gray-600">{role}</p>
          <p className="font-normal text-sm text-gray-600">{grade}</p>
        </div>

        {/* Timeline */}
        <div className="flex justify-end">
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  );
}
