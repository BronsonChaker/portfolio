export default function SkillsListItem({ image, name }) {
  return (
    <div className="flex gap-1.5 px-4 py-1 border border-stone-200 shadow-xs shadow-stone-200 rounded-2xl items-center justify-center">
      <img src={image} alt="" className="h-5 w-5" />
      <p className="text-md">{name}</p>
    </div>
  );
}
