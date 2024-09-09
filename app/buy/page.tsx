
import { ChevronLeft } from 'lucide-react';

function buy(){
    /*<div className="buy now py-10"><br></br>
    <div className="flex space-x-96 ml-8">
    <ChevronLeft className=" size-9 text-black"/>*/
    return (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
          <ChevronLeft className=" size-9 text-black"/>
            <p className="text-center mt-2">India postage 1967</p>
            <p className="text-center mt-1">By stamp-king-</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add Address</button>
          </div>
          <div className="md:w-1/2 p-4 bg-gray-100">
            <h2 className="text-xl font-bold">Order summary</h2>
            <ul>
              <li>Items: ₹75,000</li>
              <li>Delivery: ₹0</li>
              <li>Total: ₹75000</li>
            </ul>
            <div className="flex justify-end mt-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
          </div>
        </div>
      );
    };

export default buy();