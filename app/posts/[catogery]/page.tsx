"use client";
import PostComponent from "@/components/PostComponent";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { Plus, User } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { collection } from "firebase/firestore";
import { DocumentData } from "firebase-admin/firestore";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function PostCat({ params }: { params: { catogery: string } }) {
  const [docs, setDocs] = useState<DocumentData | undefined>([]);
  const [isPending, setTransition] = useTransition();
  const { user } = useUser();
  const [locCollection] = useCollection(collection(db, "postCollection"));
  useEffect(() => {
    setTransition(async () => {
      const groupedCollection: DocumentData | undefined =
        locCollection?.docs.map((val) => {
          if (val?.data()?.catogery?.toLowerCase() == params?.catogery) {
            return val?.data();
          }
        });
      setDocs(groupedCollection);
    });
  }, [locCollection, params?.catogery]);
  return (
    <main className="grid grid-cols-8 md:px-5 lg:px-5">
      {user ? (
        <section className="col-span-full md:col-span-6 lg:col-span-6 bg-[#EDC8A3] md:bg-[conic-gradient(var(--tw-gradient-stops))] from-[#C5A687] via-[#EDC8A3] to-[#D9B795] lg:bg-[conic-gradient(var(--tw-gradient-stops))] from-[#C5A687] via-[#EDC8A3] to-[#D9B795]">
          {docs?.map((val: any) => {
            // eslint-disable-line @typescript-eslint/no-explicit-any
            console.log(val?.createdAt);
            return isPending ? (
              <p>Loading</p>
            ) : (
              val && (
                <PostComponent
                  desc={val?.text}
                  name={val?.name}
                  profilePic={`${val?.profilePic}`}
                  imgUrl={val?.image}
                />
              )
            );
          })}
        </section>
      ) : (
        <section className="col-span-full md:col-span-6 lg:col-span-6 flex flex-col justify-evenly items-center text-black">
          <p>Please Login</p>

          <SignedOut>
            <SignInButton>
              <Button className="bg-[#C39D76] hover:bg-[#C19473]">
                Log In
              </Button>
            </SignInButton>
          </SignedOut>
        </section>
      )}
      {user && (
        <section className="flex-col sticky top-0 min-h-screen hidden items-evenly col-span-2 py-5 pl-5 md:flex lg:flex">
          <h1 className="text-lg font-bold text-black self-center">
            Recommended
          </h1>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <User />
              <p>vatsa</p>
            </div>
            <Button className="bg-transparent hover:bg-[#C19473]">
              <Plus />
            </Button>
          </div>
        </section>
      )}
    </main>
  );
}

export default PostCat;
