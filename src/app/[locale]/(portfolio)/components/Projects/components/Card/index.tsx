import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export const Card = ({ title, description, image }: CardProps) => {
  return (
    <a
      href="https://korean-course.vercel.app"
      target="_blank"
      className="focus-ring group block overflow-hidden rounded-md"
    >
      <div className="bg-indigo-100 p-4">
        <Image
          src={image}
          alt={title}
          className="h-[300px] object-cover object-bottom transition ease-in group-hover:scale-110"
        />
      </div>

      <div className="rounded-b-md border border-t-0 border-slate-200 bg-white p-4">
        <div className="flex justify-between gap-2">
          <h4 className="text-lg font-medium">{title}</h4>

          <ArrowTopRightOnSquareIcon className="size-5" />
        </div>

        <p className="text-sm text-slate-500">{description}</p>
      </div>
    </a>
  );
};
