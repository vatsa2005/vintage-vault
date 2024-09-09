
import Image from 'next/image';
import anna from './anna.jpg';
import izanami from './izanami.jpg';
import india from './india 1967.jpg';
import { Bookmark, ChevronLeft } from 'lucide-react';

function shop() {  
  return (  
   <div className="shop-container py-10"><br></br>
    <div className="flex space-x-96 ml-8">
     <ChevronLeft className=" size-9 text-black"/> 
      <h1 className="text-3xl text-black text-center font-bold">SHOP ANTIQUE GEMS</h1></div>
    <div className="stamps flex justify-center space-x-12 mt-10">  
      <div className="stamps__item rounded-3xl border-[#C39D76] p-6 border-2">  
       <div className="image flex justify-center items-center">  
        <Image  
          src={anna}  
          alt="1"  
          sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"  
          className="w-full h-auto border-[#C39D76] border-4 rounded-lg"  
        />  
       </div>  
       <p className="item-title text-black text-center mt-4">The Half Anna Stamp</p>  
       <div className="buttons flex flex-col items-center">  
        <button className="buy-button bg-[#f0e0d0] text-black px-6 py-2 rounded-full mt-2">Buy</button>  
        <button className="add-to-cart-button bg-[#f0e0d0] text-black px-6 py-2 rounded-full mt-2">Add to cart</button><br></br>  
        <button className="add-to-saved-button bg-transparent border-solid border-2 border-black text-black px-6 py-2 rounded mt-2  flex items-center justify-center flex-direction-row-reverse ">Add to Saved <Bookmark className=' mr-2' /></button>  
       </div>  
      </div>  
      <div className="stamps__item rounded-3xl border-[#C39D76] p-6 border-2">  
       <div className="image flex justify-center items-center">  
        <Image  
          src={izanami}  
          alt="2"  
          sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"  
          className="w-full h-auto border-[#C39D76] border-4 rounded-lg"  
        />  
       </div>  
       <p className="item-title text-black text-center mt-4">A Stamp from the Izanami</p>  
       <div className="buttons flex flex-col items-center">  
        <button className="buy-button bg-[#f0e0d0] text-black px-6 py-2 rounded-full mt-2">Buy</button>  
        <button className="add-to-cart-button bg-[#f0e0d0] text-black px-6 py-2 rounded-full mt-2">Add to cart</button><br></br>  
        <button className="add-to-saved-button bg-transparent border-solid border-2 border-black text-black px-6 py-2 mt-2  flex items-center">Add to Saved<Bookmark className='mr-2'/></button>  
       </div>  
      </div>  
      <div className="stamps__item rounded-3xl border-[#C39D76] p-6 border-2">  
       <div className="image flex justify-center items-center">  
        <Image  
          src={india}  
          alt="3"  
          sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"  
          className="w-full h-auto border-[#C39D76] border-4 rounded-lg"  
        />  
       </div>  
       <p className="item-title text-black text-center mt-4">India Postage 1967</p>  
       <div className="buttons flex flex-col items-center">  
        <button className="buy-button bg-[#f0e0d0] text-black px-6 py-2 rounded-full mt-2">Buy</button>  
        <button className="add-to-cart-button bg-[#f0e0d0] text-black px-6 py-2 rounded-full mt-2">Add to cart</button><br></br>
        <button className="add-to-saved-button bg-transparent border-solid border-2 border-black text-black px-6 py-2 mt-2 flex items-center">Add to Saved<Bookmark className="mr-2"/></button>  
       </div>  
       </div>
      </div>  
    </div>  
  );  
}  
  
export default shop;
