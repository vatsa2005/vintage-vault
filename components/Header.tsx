"use client";
import {
  ChevronDown,
  CirclePlus,
  Home,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "@/app/logo.png";

import { useState } from "react";
import Link from "next/link";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

function Header() {
  const [dropdownName, setDropDownName] = useState<string | null>("Home");

  function handleDropdownClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    setDropDownName(e?.currentTarget?.textContent);
  }

  return (
    <div className="flex items-center min-h-14 justify-between">
      <div className="flex items-center space-x-8 md:px-4 lg:px-4">
        <Link href="/">
          <Home className="hidden md:inline-block lg:inline-block text-black w-8 h-8" />
        </Link>
        <form action="">
          <DropdownMenu>
            <Button
              asChild
              className="h-8 w-full bg-[#C19473] shadow-lg text-black hover:bg-[#C39D76] md:w-40 lg:w-40"
            >
              <DropdownMenuTrigger>
                {dropdownName} <ChevronDown />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent className="bg-[#C19473]">
              <Link href="/">
                <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
                  Home
                </DropdownMenuItem>
              </Link>
              <Link href="/posts/stamps">
                <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
                  Stamps
                </DropdownMenuItem>
              </Link>
              <Link href="/posts/cars">
                <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
                  Cars
                </DropdownMenuItem>
              </Link>
              <Link href="/posts/textiles">
                <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
                  Textiles
                </DropdownMenuItem>
              </Link>
              <Link href="/posts/cameras">
                <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
                  Cameras
                </DropdownMenuItem>
              </Link>
              <Link href="/posts/postcards">
                <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
                  postcards
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </form>
      </div>
      <div className="flex justify-center items-center self-center">
        <Image
          src={logo}
          alt="logo"
          className="w-20 h-20 object-contain md:w-full md:h-full lg:h-full lg:w-full"
        />
      </div>
      <div className="hidden space-x-4 items-center md:hidden lg:flex">
        <Link href="/" className="bg-[#C39D76]">
          <CirclePlus className="icon w-8 h-8" />
        </Link>
        <form
          action=""
          className="h-10 flex items-center bg-[#C19473] p-2 rounded-lg shadow-xl"
        >
          <input
            className="h-full bg-[#C19473] outline-none focus:bg-transparent"
            type="text"
            name="search"
          />
          <Button className="bg-[#C19473]">
            <Search className="text-black" />
          </Button>
        </form>
        <Link href="/cart" className="bg-[#C39D76]">
          <ShoppingCart className="icon w-8 h-8" />
        </Link>
        <Button className="bg-[#C39D76] hover:bg-[#C19473]">
          <SignedOut>
            <SignInButton>
              <UserRound className="icon w-8 h-8" />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Button>
        <Button className="bg-[#C39D76] hover:bg-[#C19473]">
          <Menu className="icon w-8 h-8" />
        </Button>
      </div>
      <Button className="bg-[#C39D76] hover:bg-[#C19473] md:flex lg:hidden">
        <Menu className="icon w-8 h-8" />
      </Button>
    </div>
  );
}

export default Header;
