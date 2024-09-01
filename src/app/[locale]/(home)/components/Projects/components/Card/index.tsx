import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  href: string;
  title: string;
  description: string;
  image: StaticImageData;
}

export const Card = ({ href, title, description, image }: CardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="focus-ring group block overflow-hidden rounded-md border border-slate-200"
    >
      <div className="overflow-hidden bg-indigo-100 p-4">
        <Image
          src={image}
          alt={title}
          placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88Pz/fwAJPAPHGezJpAAAAABJRU5ErkJggg=="
          className="h-[300px] object-cover object-bottom transition duration-200 ease-in group-hover:scale-125"
        />
      </div>

      <div className="rounded-b-md border-t border-slate-200 bg-white p-4">
        <div className="flex justify-between gap-2">
          <h4 className="text-lg font-medium">{title}</h4>

          <ArrowTopRightOnSquareIcon className="size-5" />
        </div>

        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </a>
  );
};
