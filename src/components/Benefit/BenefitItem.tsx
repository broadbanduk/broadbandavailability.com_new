import Image from "next/image";

export default function BenefitItem({
  icon,
  alt,
  title,
  description,
}: {
  icon: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-5 last:max-w-[270px] flex flex-col items-center text-center sm:max-w-xs mx-auto">
      <Image src={icon} width={42} height={44} alt={alt} />
      <h3 className="text-xl px-5 font-lato font-bold text-corporate-black">
        {title}
      </h3>
      <p className="ttext-xl text-corporate-black">{description}</p>
    </div>
  );
}
