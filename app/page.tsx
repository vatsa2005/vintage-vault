// import PostComponent from "@/app/posts/[catogery]/PostComponent";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import Front from './front.png'

export default function Home() {
  const { userId } = auth();
  return (
    <main className=" min-h-full max-w-full">
      {userId ? (
        <div className="flex justify-center items-center">
        <div>
          <Image
          src={Front}
          alt="Front"
          className="w-4/6 h-4/6 object-contain mt-16 ml-24 mb-16" />
          <Button className="mx-56 bg-transparent text-black font-cart text-2xl text-bold hover:bg-[#C19473] p-8 border-solid border-4 border-black rounded-xl">
            <Link href="/posts/stamps">START EXPLORING</Link>
          </Button>
          </div>
          </div>
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
    </main>
  );
}
