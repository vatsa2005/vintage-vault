// import PostComponent from "@/app/posts/[catogery]/PostComponent";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();
  return (
    <main className="flex min-h-full max-w-full justify-center items-center">
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
