import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "@/components/ModeToggle";

function MobileNavbar({ navLinks }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <p className="text-2xl">
          <AlignLeft />
        </p>
      </SheetTrigger>
      <SheetContent className="bg-black">
        <div className="flex flex-col gap-4 justify-center items-center mt-16">
          {navLinks.map((item) => (
            <SheetClose asChild key={item.id}>
              <Link
                className="font-bold text-white hover:text-indigo-700"
                href={item.link}
              >
                {item.name}
              </Link>
            </SheetClose>
          ))}
          <Button className="bg-gradient-to-r m-2 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
            <a href="https://wa.me/qr/WRZ4QPBIWBY5A1" target="_blank">
              Hire Me
            </a>
          </Button>
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
