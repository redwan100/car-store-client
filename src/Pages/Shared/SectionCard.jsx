
const SectionCard = ({title, img}) => {
  return (
    <div>
      <div className="w-full relative h-[25rem]">
        <img src={img} alt="" className="w-full h-full object-cover" />
        <div className="w-full h-full absolute gap-4  left-0 bottom-0 rounded-md p-4 flex  items-center bg-gradient-to-r from-[#151515] to-[rgba(2,21,21,0)] text-white">
          <h1 className="text-6xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default SectionCard