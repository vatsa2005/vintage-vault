"use client";

import Image from "next/image";
import postImage from "@/app/post-img.png";
import {
  CircleDot,
  EllipsisVertical,
  Forward,
  Heart,
  MessageCircleMore,
  Save,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

function PostComponent() {
  const [liked, setLiked] = useState<boolean>(false);

  function handleLikes() {
    setLiked(!liked);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#C5A687] py-10">
        <div className="flex h-fit w-fit flex-col bg-[#B7A08E] px-5">
          <div className="flex justify-between p-5 items-center">
            <div className="flex items-center">
              {/* <CircleUserRound className="h-8 w-8" /> */}
              <Image
                src={postImage}
                alt="Profile"
                height={40}
                width={40}
                className="rounded-full"
              />
              <p className="px-4">stamp__stories</p>
              <CircleDot />
              <p className="text-[#00000087] px-2">24m</p>
            </div>
            <div>
              <DropdownMenu>
                <Button className="bg-transparent hover:bg-[#C39D76]">
                  <DropdownMenuTrigger>
                    <EllipsisVertical />
                  </DropdownMenuTrigger>
                </Button>
                <DropdownMenuContent className="bg-[#C19473]">
                  <Link href="/">
                    <DropdownMenuItem>Stamps</DropdownMenuItem>
                  </Link>
                  <Link href="/">
                    <DropdownMenuItem>Cars</DropdownMenuItem>
                  </Link>
                  <Link href="/">
                    <DropdownMenuItem>Textiles</DropdownMenuItem>
                  </Link>
                  <Link href="/">
                    <DropdownMenuItem>Cameras</DropdownMenuItem>
                  </Link>
                  <Link href="/">
                    <DropdownMenuItem>postcards</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div>
            <Image
              className="max-w-[2000px] object-cover"
              src={postImage}
              alt="Post Image"
            />
          </div>
          <div className="flex justify-evenly p-5">
            <Button
              className="bg-transparent hover:bg-[#C19473]"
              onClick={handleLikes}
            >
              {liked ? (
                <Heart className="h-[10] w-[10] text-red-500" fill="#F43F5E" />
              ) : (
                <Heart className="h-[10] w-[10]" />
              )}
            </Button>
            <Button className="bg-transparent hover:bg-[#C19473]">
              <MessageCircleMore className="h-[10] w-[10]" />
            </Button>
            <Button className="bg-transparent hover:bg-[#C19473]">
              <Send className="h-[10] w-[10]" />
            </Button>
            <Button className="bg-transparent hover:bg-[#C19473]">
              <Save className="h-[10] w-[10]" />
            </Button>
          </div>
        </div>
        <div className="flex text-black p-1">
          <p className="pr-4">stamp__stories</p>
          <p>Check out my new stamp</p>
        </div>
        <div className="p-1 text-black">
          <p className="hover:underline cursor-pointer inline-block">
            View all comments
          </p>
          <div className="flex justify-start items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <input
              className="bg-transparent outline-none py-2 placeholder-gray-300 px-1"
              placeholder="Add a comment..."
            />
          </div>
        </div>
      </div>
      <div className="hidden md:px-10 lg:px-10">
        <Button className="bg-transparent rounded-full hover:bg-[#C19473]">
          <Forward />
        </Button>
      </div>
    </div>
  );
}

export default PostComponent;
