import { Cog, Save, ShieldAlert, ShoppingCart, UserPlus, UserRound } from 'lucide-react';
import Link from "next/link";
import { Button } from './ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
function Menubar(){
    return(<div className='absolute top-20 right-2 bg-[#C19473] rounded-xl p-8 font-head' >
        <div>
        <UserRound className='h-20 w-20'/>
        <h3 className=' text-xl'>Pranav Mani</h3>
        <p>manipranav13@gmail.com</p>
        <div className='mt-12 flex space-x-12' >
               <Cog className='h-10 w-10 '/>
               <h3 className='mt-2 text-xl'>Settings</h3>
        </div>
        <Link href="/saved">
        <div className='mt-8 flex space-x-12' >
               <Save className='h-10 w-10 '/>
               <h3 className='mt-2 text-xl'>Saved</h3>
        </div>
        </Link>
       
       <Link href="/cart">
       <div className='mt-8 flex space-x-12' >
               <ShoppingCart className='h-10 w-10 '/>
              <h3 className='mt-2 text-xl'> View Cart</h3>
       </div>
       </Link>

        <div className='mt-8 flex space-x-12' >
        <Button className="bg-[#C39D76] hover:bg-[#C19473]">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Button>
               < UserPlus className='h-10 w-10 '/>
               <h3 className='mt-2 text-xl'>Switch Account</h3>
        </div>
        <div className='mt-8 flex space-x-12' >
               <ShieldAlert className='h-10 w-10 '/>
               <h3 className='mt-2 text-xl'>Report</h3>
        </div>
        </div>
    </div>);
}
export default Menubar;