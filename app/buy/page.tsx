import Image from 'next/image';
import india from './india 1967.jpg';

function buy(){
    return (
        <div className="flex flex-col md:flex-row mt-20">
        <div className="md:w-1/2 p-4 bg-[#C39D76] m-1 ">
        <Image  
          src={india}  
          alt="3"  
          sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"  
          className="w-72 h-auto border-4 rounded-lg ml-48 "  
        /> 
          <p className="text-center text-black mt-2">India postage 1967</p>
          <p className="text-center mt-1 text-black">By stamp-king-</p><br></br>
          <button className=" bg-[#C39D76] text-black border-black border-solid border-2 px-6 py-2 rounded-full mt-2 text-center ml-64">Add Address</button>
        </div>
        <div className="md:w-1/2 p-4 bg-[#C39D76] m-1">
          <h2 className="text-3xl font-bold text-black">Order summary</h2><br></br>
          <ul>
            <li className= "text-black text-3xl">Items: ₹75,000</li><br></br>
            <li  className= "text-black text-3xl">Delivery: ₹0</li><br></br>
            <li  className= "text-black text-3xl">Total: ₹75000</li><br></br>
          </ul>
          <div className="flex justify-end mt-4">
            <button className=" bg-[#C39D76] text-black border-black border-solid border-2 px-6 py-2 rounded-full mt-2 text-center mr-64">Buy Now</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default buy;