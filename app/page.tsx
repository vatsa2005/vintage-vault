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
        <Button>
          <Link href="/posts/stamps">Start Exploring</Link>
        </Button>
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
