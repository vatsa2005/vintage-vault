
import Image from 'next/image';
import anna from './anna.jpg';
import izanami from './izanami.jpg';
import india from './india 1967.jpg';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />


function shop() {
  return (
    <div className="shop-container"><br></br>
      <h1 className="size-200px text-black text-center center font-buy;">SHOP ANTIQUE GEMS</h1><br></br><br></br><br></br>
      <div className="arrow align-top"></div>
      <div className="stamps flex  justify-center space-x-24">
        <div className="stamps__item rounded-3xl border-[#C39D76] p-4 border-2 ;">
          <div className="image-container flex justify-center items-center;">
            <Image
              src={anna}
              alt="1"
              sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw;"
              className=" flex  justify-between w-full h-auto divide-solid border-[#C39D76] border-10;"
            />
          </div>
          <p className="item-title  text-black text-center mt-4;">The Half Anna Stamp</p>
          <div className="button-container flex flex-col items-center;">
            <button className="buy-button bg-white text-black px-4 py-2 rounded;">Buy</button><br></br>
            <button className="add-to-cart-button bg-white text-black px-4 py-2 rounded mt-2;">Add to cart</button><br></br>
            <button className="add-to-wishlist-button bg-white text-black px-4 py-2 rounded mt-2;">Add to Wishlist</button><br></br>
          </div>
        </div>
        <div className="stamps__item rounded-3xl border-[#C39D76] p-4 border-2 ;">
          <div className="image-container flex justify-center items-center;">
            <Image
              src={izanami}
              alt="2"
              sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw;"
              className="flex justify-between w-full h-auto divide-solid border-[#C39D76] border-10 ;"
            />
          </div>
          <p className="item-title text-black text-center mt-4;">A Stamp from the Izanami</p>
          <div className="button-container flex flex-col items-center;">
            <button className="buy-button  bg-white text-black px-4 py-2 rounded;">Buy</button><br></br>
            <button className="add-to-cart-button  bg-white text-black px-4 py-2 rounded mt-2;">Add to cart</button><br></br>
            <button className="add-to-wishlist-button  bg-white text-black px-4 py-2 rounded mt-2;">Add to Wishlist</button><br></br>
          </div>
        </div>
        <div className="stamps__item rounded-3xl border-[#C39D76] p-4 border-2 ;">
          <div className="image-container flex justify-center items-center;">
            <Image
              src={india}
              alt="3"
              sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw;"
              className="w-full h-auto divide-solid border-[#C39D76] border-10 justify-between; "
            />
          </div>
          <p className="item-title text-black text-center mt-4;">India Postage 1967</p>
          <div className="button-container flex flex-col items-center;">
            <button className="buy-button  bg-white text-black px-4 py-2 rounded;">Buy</button><br></br>
            <button className="add-to-cart-button  bg-white text-black px-4 py-2 rounded mt-2;">Add to cart</button><br></br>
            <button className="add-to-wishlist-button  bg-white text-black px-4 py-2 rounded mt-sm;">Add to Wishlist</button><br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default shop;
