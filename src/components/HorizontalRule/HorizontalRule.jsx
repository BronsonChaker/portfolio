export default function HorizontalRule({ text }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="border h-px w-3/12"></div>
      <div className="border bg-primary rounded-xl px-4 py-1">
        <span className="text-white text-md font-medium">{text}</span>
      </div>
      <div className="border w-3/12"></div>
    </div>
  );
}
