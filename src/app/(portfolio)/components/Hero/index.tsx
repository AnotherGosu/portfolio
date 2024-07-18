import Image from "next/image";

import programmingImg from "@/images/programming.svg";

import { Contacts } from "./components/Contacts";
import { Description } from "./components/Description";
import { Heading } from "./components/Heading";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Heading />
        <Contacts />
      </div>

      <div className="flex flex-col-reverse gap-8 md:flex-row">
        <Description />

        <Image
          src={programmingImg}
          alt="Programming"
          height={300}
          className="h-[200px] lg:h-[300px]"
        />
      </div>
    </section>
  );
};
