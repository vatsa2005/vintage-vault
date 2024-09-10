"use client";

import { createNewPost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, useTransition } from "react";

function AddPost() {
  const [isPending, setTransition] = useTransition();
  const router = useRouter();
  const textRef = useRef<HTMLTextAreaElement>(null);

  function handlePost() {
    setTransition(async () => {
      const { postId } = await createNewPost(
        textRef?.current?.value,
        dropdownName
      );
      router.back();
    });
  }

  function handleCancel() {
    router.back();
  }
  const [dropdownName, setDropDownName] = useState<string | null>("Stamps");

  function handleDropdownClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    setDropDownName(e?.currentTarget?.textContent);
  }

  return (
    <div className="flex flex-col max-w-full min-h-full items-center space-y-4 justify-center">
      <textarea className="w-7xl text-black" ref={textRef}></textarea>
      <div className="flex space-x-5">
        <p>Catogery:</p>
        <DropdownMenu>
          <Button
            asChild
            className="h-8 w-full bg-[#C19473] shadow-lg text-black hover:bg-[#C39D76] md:w-40 lg:w-40"
          >
            <DropdownMenuTrigger>
              {dropdownName} <ChevronDown />
            </DropdownMenuTrigger>
          </Button>
          <DropdownMenuContent className="bg-[#C19473] max-w-60">
            <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
              Stamps
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
              Cars
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
              Textiles
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
              Cameras
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => handleDropdownClick(e)}>
              postcards
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex space-x-5">
        <Button
          className={isPending ? "hidden" : "inline-block"}
          disabled={isPending}
          onClick={handlePost}
        >
          Add Post
        </Button>
        <Button
          className={isPending ? "hidden" : "inline-block"}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
      <p>{isPending && "Creating"}</p>
    </div>
  );
}

export default AddPost;
