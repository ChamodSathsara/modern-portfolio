import { BiMinusFront } from "react-icons/bi";
import { FaAllergies } from "react-icons/fa";
import { SiBackendless } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbVersions } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { MdMoreTime } from "react-icons/md";

export const skillCategories = [
  { id: 1, name: "All", icon: <FaAllergies /> },
  { id: 2, name: "Frontend", icon: <BiMinusFront /> },
  { id: 3, name: "Backend", icon: <SiBackendless /> },
  { id: 4, name: "Database", icon: <FaDatabase /> },
  { id: 5, name: "Version Control", icon: <TbVersions /> },
  { id: 6, name: "DevOps", icon: <VscAzureDevops /> },
  { id: 7, name: "Other", icon: <MdMoreTime /> },
];
