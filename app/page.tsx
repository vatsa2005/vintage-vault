import PostComponent from "@/components/PostComponent";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default function Home() {
  const { userId } = auth();
  return (
    <main className="grid grid-cols-8 md:px-5 lg:px-5">
      {userId ? (
        <section className="col-span-full md:col-span-6 lg:col-span-6 bg-[#EDC8A3] md:bg-[conic-gradient(var(--tw-gradient-stops))] from-[#C5A687] via-[#EDC8A3] to-[#D9B795] lg:bg-[conic-gradient(var(--tw-gradient-stops))] from-[#C5A687] via-[#EDC8A3] to-[#D9B795]">
          <PostComponent />
          <PostComponent />
          <PostComponent />
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
      {userId && (
        <section className="hidden justify-center col-span-2 md:flex lg:flex">
          <h1 className="text-lg font-bold text-black">Recommended</h1>
        </section>
      )}
    </main>
  );
}
