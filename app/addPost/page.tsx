"use client";

import { createNewPost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { db, storage } from "@/firebase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState, useTransition } from "react";

function AddPost() {
  const [isPending, setTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState<string | undefined>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  function handlePost() {
    setTransition(async () => {
      const docId = await createNewPost(textRef?.current?.value, dropdownName);
      if (selectedFile) {
        const imageRef = ref(storage, `/images/${docId.postId}`);
        await uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);
          const docRef = doc(db, "postCollection", docId.postId);
          await updateDoc(docRef, {
            image: downloadURL,
          });
        });
      }
      console.log(imgUrl);
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

  function handleImgClick() {
    imgRef?.current?.click();
    console.log(imgUrl);
  }

  return (
    <div className="flex flex-col max-w-full min-h-full items-center space-y-4 justify-center">
      <textarea className="w-7xl text-black" ref={textRef}></textarea>
      <input
        type="file"
        name="postImage"
        accept=".png, .jpg, .jpeg, .gif, .svg"
        ref={imgRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (!event.target.files) return;
          setSelectedFile(event.target.files[0]);
          selectedFile === null
            ? ""
            : setImgUrl(URL.createObjectURL(selectedFile));
        }}
        className="hidden"
      />
      <Button onClick={handleImgClick}>Choose an Image</Button>
      {selectedFile && (
        <picture>
          <img
            src={selectedFile === null ? "" : URL.createObjectURL(selectedFile)}
            alt="Preview"
            className="w-40 h-40 object-contain"
          />
        </picture>
      )}
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
