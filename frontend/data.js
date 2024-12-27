import { PiCouchFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa6";
import { GiWarpPipe } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { GiDominoTiles } from "react-icons/gi";
import { BsDoorOpenFill } from "react-icons/bs";
import { MdBathroom } from "react-icons/md";
import { GiMetalScales } from "react-icons/gi";
import { FaPaintRoller } from "react-icons/fa6";
import { GiConcreteBag } from "react-icons/gi";

export const navLinks = [
  {
    id: 1,
    name: "Furniture",
    link: "/furniture",
    icon: PiCouchFill,
  },
  {
    id: 2,
    name: "Lighting",
    link: "/lighting",
    icon: FaLightbulb,
  },
  {
    id: 3,
    name: "Plumbing",
    link: "/plumbing",
    icon: GiWarpPipe,
  },
  {
    id: 4,
    name: "Electrical",
    link: "/electrical",
    icon: MdElectricalServices,
  },
  {
    id: 5,
    name: "Tiles & Flooring",
    link: "/tiles-flooring",
    icon: GiDominoTiles,
  },
  {
    id: 6,
    name: "Doors",
    link: "/doors",
    icon: BsDoorOpenFill,
  },
  {
    id: 7,
    name: "Bathroom",
    link: "/bathroom",
    icon: MdBathroom,
  },
  {
    id: 8,
    name: "Iron & Steel",
    link: "/iron-steel",
    icon: GiMetalScales,
  },
  {
    id: 9,
    name: "Paints & Finishes",
    link: "/paints-finishes",
    icon: FaPaintRoller,
  },
  {
    id: 10,
    name: "Cement & Concrete",
    link: "/cement-concrete",
    icon: GiConcreteBag,
  },
];
