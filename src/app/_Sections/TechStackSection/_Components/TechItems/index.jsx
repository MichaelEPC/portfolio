import Image from "next/image";

const TechItems = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center border-2 rounded-lg border-slate-500">
        <Image className="h-16 w-16 p-1" src={img} alt={img} />
      </div>
      <p className="font-semibold">{name}</p>
    </div>
  );
};

export default TechItems;
