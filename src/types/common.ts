import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  subtitle: string;
  stack: string[];
  href: string;
  image: StaticImageData;
  theme: "white" | "black";
}

export interface Experience {
  title: string;
  subtitle: string;
  link: string;
  list: string[];
}

export interface Icon {
  title: string;
  d: string;
}
