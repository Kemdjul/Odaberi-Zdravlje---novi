import React from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, removeFromCart, selectCart, selectTotalPrice } from '../store/cartSlice';
import { AiFillCloseCircle } from 'react-icons/ai';

const Cart = () => {
    const cart = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();

    const onDecrement = (id, quantity) => {
        if (quantity === 1) return;
        dispatch(changeQuantity({ id: id, quantity: quantity - 1 }));
    };

    const onIncrement = (id, quantity) => {
        dispatch(changeQuantity({ id: id, quantity: quantity + 1 }));
    };

  return (
    <div>
        <Nav />
        <Banner title="KOŠARICA" subtitle="POČETNA / KOŠARICA" />
        
        <div className="px-[376px] py-[80px] flex flex-col gap-[80px]">
            <div className="w-full flex flex-col gap-4">
                <div className="grid grid-cols-6 font-semibold mb-9">
                    <h2 className="col-span-3">PROIZVODI</h2>
                    <h2 className="text-center">CIJENA</h2>
                    <h2 className="text-center">KOLIČINA</h2>
                    <h2 className="text-center">UKUPNO</h2>
                </div>

                {cart?.map((e) => (
                    <div className="grid grid-cols-6 items-center w-full text-center">
                        <AiFillCloseCircle 
                            className="absolute left-[304px] text-red-600 cursor-pointer"
                            onClick={() => dispatch(removeFromCart(e.id))}
                        />
                        <div className="flex items-center gap-8 col-span-3">
                            <img 
                                src={require(`../assets/${e.src}`)}
                                alt={e.alt}
                                className="w-[150px] h-auto border-2"
                            />
                            <h3>{e.name}</h3>
                        </div>

                        <p>{e.price}€</p>

                        <div className="flex justify-center items-center">
                            <button
                                className="flex justify-center items-center bg-siva rounded-l-lg text-zelena px-4 py-2"
                                onClick={() => onDecrement(e.id, e.quantity)}
                            >-</button>
                            <p
                                className="flex justify-center items-center bg-siva px-4 py-2"
                            >{e.quantity}</p>
                            <button
                                className="flex justify-center items-center bg-siva rounded-r-lg text-zelena px-4 py-2"
                                onClick={() => onIncrement(e.id, e.quantity)}
                            >+</button>
                        </div>

                        <p>{e.quantity * e.price}€</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between">
                <form className="w-full flex">
                    <input 
                        type="text" 
                        className="border-2 border-[#F1F3F4] placeholder-[#262626] placeholder-opacity-50 outline-none h-[56px] text-lg" 
                        placeholder="Kupon kod"
                    />
                    <button 
                        type="submit"
                        className="h-[56px] flex justify-center items-center px-8 bg-zelena text-white rounded-r-lg text-lg"
                    >Iskoristi</button>
                </form>

                <div className="w-full flex flex-col gap-2 pl-[200px] pr-[80px]">
                    <div className="flex justify-between">
                        <p>Ukupno</p>
                        <p>{totalPrice}€</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Dostava</p>
                        <p>4€</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Kupon</p>
                        <p>No</p>
                    </div>

                    <div className="flex justify-between mt-4 font-semibold text-xl px-4">
                        <p>UKUPNO</p>
                        <p>{totalPrice + 4}€</p>
                    </div>

                    <button
                        className="w-full flex justify-center items-center bg-zelena text-white font-semibold py-4 rounded-lg mt-4"
                    >Plaćanje</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart