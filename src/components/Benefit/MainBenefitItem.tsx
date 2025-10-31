import Image from "next/image";

export default function MainBenefitItem({
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
    <div className="space-y-5 flex flex-col items-center text-center sm:max-w-xs mx-auto">
      <Image src={icon} width={42} height={44} alt={alt} />
      <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-lato font-bold text-corporate-black">
        {title}
      </h3>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-corporate-black">
        {description}
      </p>
    </div>
  );
}
