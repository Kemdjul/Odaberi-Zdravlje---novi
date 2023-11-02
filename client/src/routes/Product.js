import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const Product = () => {
    const dispatch = useDispatch();
    const params = useParams();
    
    /* Fetching products, adding to cart */
    const [product, setProduct] = useState();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:3300/proizvodi/${params.tag}`);
                setProduct(res.data[0]);
            } catch(err) {
                console.log(err);
            }
        }
        fetchProduct();
    }, [params.tag]);

    const onAddToCart = () => {
        dispatch(addToCart({ ...product, quantity: quantity }));
    }

    /* Quantity logic */

    const [quantity, setQuantity] = useState(1);
    const onIncrement = () => {
        setQuantity(quantity + 1);
    }
    const onDecrement = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1);
    }

  return (
    <div className="page-container">
        <Nav />

        {/* Banner */}
        <div className="w-full h-[80px] flex gap-2 justify-center items-center">
            <p className="text-zelena">Početna</p>
            <p className="opacity-80">/</p>
            <p className="text-zelena">Trgovina</p>
            <p className="opacity-80">/</p>
            <p>{product?.name}</p>
        </div>

        {/* O proizvodu */}        
        <div className="w-full px-[240px] pt-[40px] pb-[80px] flex gap-[40px]">
            <div className="flex flex-col w-full gap-4">
                <img
                    src={product ? require(`../assets/${product.src}`) : ''}
                    alt={product?.alt}
                    className="w-[496px] h-auto"
                />
                <div>
    
                </div>
            </div>
            <div className="flex flex-col w-full gap-6">
                <h2 className="text-3xl font-semibold">{product?.name}</h2>
                <div className="w-full h-[2px] bg-siva"></div>
                <p className="text-zelena text-2xl font-semibold">{product?.price}€</p>
                <div className="grid grid-cols-2 gap-y-2">
                    <p>Dostupnost:</p>
                    <p>Na zalihi</p>
                    <p>Kategorija:</p>
                    <p>{product?.category}</p>
                </div>
                <div className="w-full h-[2px] bg-siva"></div>
                <div>
                    <p>Odabir boje: </p>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <p>Veličina: </p>
                    <div>
                        <p>S</p>
                    </div>
                </div>
                <div className="w-full h-[2px] bg-siva"></div>
                <div className="flex justify-between">
                    <div className="flex">
                        <button 
                            className="flex justify-center items-center bg-siva rounded-l-lg text-zelena px-4 py-2 text-3xl"
                            onClick={onDecrement}
                        >-</button>
                        <p className="flex justify-center items-center bg-siva text-2xl">{quantity}</p>
                        <button
                            className="flex justify-center items-center bg-siva rounded-r-lg text-zelena px-4 py-2 text-3xl"
                            onClick={onIncrement}
                        >+</button>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        <button 
                            className="text-zelena text-xl h-full rounded-lg px-4 bg-siva"
                            onClick={onAddToCart}
                        >Dodaj u košaricu</button>
                        <button className="text-zelena bg-siva text-2xl rounded-lg h-full px-4 font-semibold"><AiOutlineHeart /></button>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Product