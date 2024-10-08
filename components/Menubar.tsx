import { Cog, Save, ShieldAlert, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
function Menubar() {
  return (
    <div className="absolute top-20 right-2 bg-[#C19473] rounded-xl p-8 font-head">
      <div>
        <UserRound className="h-20 w-20" />
        <h3 className=" text-xl">Pranav Mani</h3>
        <p>manipranav13@gmail.com</p>
        <div className="mt-12 flex space-x-12">
          <Cog className="h-10 w-10 " />
          <h3 className="mt-2 text-xl">Settings</h3>
        </div>
        <Link href="/saved">
          <div className="mt-8 flex space-x-12">
            <Save className="h-10 w-10 " />
            <h3 className="mt-2 text-xl">Saved</h3>
          </div>
        </Link>

        <Link href="/cart">
          <div className="mt-8 flex space-x-12">
            <ShoppingCart className="h-10 w-10 " />
            <h3 className="mt-2 text-xl"> View Cart</h3>
          </div>
        </Link>

        <div className="flex justify-center items-center pt-8">
          <Button className="bg-transparent font-head text-[#171717] text-xl hover:bg-transparent flex items-center justify-start space-x-12 p-0 ml-2 ">
            <SignedIn>
              <div className="flex justify-center items-center">
                <UserButton />
              </div>
              <div>
                <p>Switch account</p>
              </div>
            </SignedIn>
          </Button>
        </div>
        <div className="mt-8  flex space-x-12">
          <ShieldAlert className="h-10 w-10 " />
          <h3 className="mt-2 text-xl">Report</h3>
        </div>
      </div>
    </div>
  );
}
export default Menubar;
