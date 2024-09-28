// import PostComponent from "@/app/posts/[catogery]/PostComponent";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Image from "next/image";
import Front from "./front.png";

export default function Home() {
  const { userId } = auth();
  return (
    <main className=" min-h-full max-w-full">
      {userId ? (
        <div className="flex-justify-center">
          <div>
            <div className="flex justify-center">
              <Image
                src={Front}
                alt="Front"
                className="w-2/5 h-3/5 mt-24 object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                className="bg-transparent rounded-xl border-solid border-4 border-black font-exp text-xl p-8 m-16 text-black hover:bg-[#C19473] "
              >
                <Link href="/posts/stamps">START EXPLORING</Link>
              </Button>
            </div>
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
