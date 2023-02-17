import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SWIGGY_IMG_CDN_URL } from '../constants';
import { clearCart } from '../Utils/cartSlice';

const Cart = () => {

    const cartItems =  useSelector(store=>store.cart.items);

    const dispatch= useDispatch();
    const handleClearClick = () => {
        dispatch(clearCart());
    };

  return (
    <div >
      <div className='flex ' >
    <div className='text=3xl'>Cart</div>
    <button className='bg-green-100 ml-96' onClick={()=> handleClearClick()}>Clear cart</button>
    </div> 
    <div className='flex'>
   { cartItems.map((item, key={id}) => (
        <div className="w-[200px] p-2 m-2 shadow-lg bg-purple-100">
        <img src={SWIGGY_IMG_CDN_URL + item.cloudinaryImageId} />
        <h2 className="font-bold text-xl">{item.name}</h2>
        <h3>{item.description }</h3>
        <h4>Price in rupees: {item.price /100}</h4>
      </div>
    ))}
        </div> 
    </div>
  )
}

export default Cart