import Image from "next/image";
import Emb from './emb.jpg' 
import Hyd from './hyd.jpg'
import Anna from './anna.jpg'
function Cart() {
  return (
      <div className="mt-8">
      <h2 className=" flex justify-center font-cart  font-bold text-2xl">your cart</h2>
      <div className="flex justify-center">
      <div className="flex space-x-2 p-5 w-3/5 mt-8 border-dotted border-4 border-black" >
      <Image
          src={Emb}
          alt="Emblem"
          className="w-40 h-40 object-contain"
        />
        <div className="w-full max-w-xl">
        <div className="flex justify-between  font-bold text-2xl">
        <h3 className="font-head">India Postage 1967</h3>
        <h3>₹ 7,500</h3>
        </div>
        <h3 className="font-prof text-2xl ml-8 mt-4">by stamp_king_.</h3>
         <div className="flex justify-end font-head  text-xl text-white " >
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Verified</button>
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Delete</button>
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Share</button>
          </div>
          </div>
          </div>
          </div>
      <div className="flex justify-center">
      <div className="flex space-x-2 p-5 w-3/5 mt-8 border-dotted border-4 border-black" >
      <Image
          src={Hyd}
          alt="Izanami"
          className="w-40 h-40 object-contain"
        />
        <div className="w-full max-w-xl">
        <div className="flex justify-between  font-bold text-2xl">
        <h3 className="font-head">A Stamp from the Izanami</h3>
        <h3>₹ 754</h3>
        </div>
        <h3 className="font-prof text-2xl ml-8 mt-4">by stamp_king_.</h3>
         <div className="flex justify-end font-head text-xl text-white" >
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Verified</button>
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Delete</button>
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Share</button>
          </div>
          </div>
          </div>
          </div>
          <div className="flex justify-center">
      <div className="flex space-x-2 p-5 w-3/5 mt-8 mb-8 border-dotted border-4 border-black" >
      <Image
          src={Anna}
          alt="Anna"
          className="w-40 h-40 object-contain"
        />
        <div className="w-full max-w-xl">
        <div className="flex justify-between  font-bold text-2xl">
        <h3 className="font-head">The Half Anna Stamp</h3>
        <h3>₹ 9,000</h3>
        </div>
        <h3 className="font-prof text-2xl ml-8 mt-4">by stamp_king_.</h3>
         <div className="flex justify-end font-head text-xl text-white " >
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Verified</button>
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Delete</button>
          <button className="p-2 m-2 rounded-xl bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9C7240] to-[#362816F2]">Share</button>
          </div>
          </div>
          </div>
          </div>
          </div>
          
        
  );
}

export default Cart