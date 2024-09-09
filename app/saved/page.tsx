import Image from "next/image";
import Car from './car.png'
import Curr from './curr.png'
import Lion from './lion.png'
import Potrait from './potrait.png'
import Statue from './statue.png'
import { EllipsisVertical } from "lucide-react";
function Saved(){
     return(
        <div className="flex justify-center">
            <div className="flex flex-wrap m-24">
              <div className="bg-[#C19473] w-fit p-8 font-bold m-8 rounded-xl">
              <div className="flex justify-between font-head  ">
              <h3 className="text-xl">Cars</h3>
              <EllipsisVertical/>
              </div>
              <Image
                 src={Car}
                 alt="Car"
                 className="w-40 h-40 object-contain mt-4"
               />
              </div>
              <div className="bg-[#C19473] w-fit p-8 font-bold m-8 rounded-xl">
              <div className="flex justify-between font-head  ">
              <h3 className="text-xl">Currency</h3>
              <EllipsisVertical/>
              </div>
              <Image
                 src={Curr}
                 alt="Car"
                 className="w-40 h-40 object-contain mt-4"
               />
              </div>
              <div className="bg-[#C19473] w-fit p-8 font-bold m-8 rounded-xl">
              <div className="flex justify-between font-head  ">
              <h3 className="text-xl">Stamps</h3>
              <EllipsisVertical/>
              </div>
              <Image
                 src={Lion}
                 alt="Car"
                 className="w-40 h-40 object-contain mt-4"
               />
              </div>
              <div className="bg-[#C19473] w-fit p-8 font-bold m-8 rounded-xl">
              <div className="flex justify-between font-head  ">
              <h3 className="text-xl">Paintings</h3>
              <EllipsisVertical/>
              </div>
              <Image
                 src={Potrait}
                 alt="Car"
                 className="w-40 h-40 object-contain mt-4"
               />
              </div>
              <div className="bg-[#C19473] w-fit p-8 font-bold m-8 rounded-xl">
              <div className="flex justify-between font-head  ">
              <h3 className="text-xl">Statues</h3>
              <EllipsisVertical/>
              </div>
              <Image
                 src={Statue}
                 alt="Car"
                 className="w-40 h-40 object-contain mt-4"
               />
              </div>
            </div>
        </div>
     );
}
export default Saved;