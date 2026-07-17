export default function SkillsListItem({ image, name }) {
  return (
    <div className="flex gap-1.5 px-4 py-1 border-2 border-stone-200 shadow-sm shadow-stone-200 rounded-full items-center justify-center">
      <img src={image} alt="" className="h-5 w-5" />
      <p>{name}</p>
    </div>
  );
}
