import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../store/cartSlice';

const SingledOutProducts = ({ productList }) => {
    const dispatch = useDispatch();

  return (
    <div className="w-full sm:py-[80px] sm:px-[120px] px-[24px] py-[32px] flex flex-col items-center gap-[24px]">
        <h2 className="text-3xl">IZDVOJENI PROIZVODI</h2>
        <div className="h-[4px] w-[128px] bg-zelena"></div>
        <p className="opacity-90">Ovdje se nalaze ovotjedni proizvodi koji se emitiraju u našim Odaberi zdravlje emisijama</p>
        <div className="flex max-sm:flex-col gap-[24px]">

            {/* Showing products */}
            {productList?.map((e, index) => {
                if (index >= 4) return '';
                else return (
                    <div className="flex flex-col gap-1 items-center transition-all hover:text-zelena" key={index}>
                        <div className="relative top-9 left-[156px] bg-zelena px-2 py-1">
                            <p className="text-white text-sm">AKCIJA!</p>
                        </div>
                        <Link to={`/proizvodi/${e.tag}`}>
                            <img 
                                src={require(`../../assets/${e.src}`)} 
                                alt={e.alt}
                                className="border cursor-pointer"
                            />
                        </Link>
                        <Link to={`/proizvodi/${e.tag}`}>
                            <h3 className="font-semibold text-lg tracking-wides">{e.name}</h3>
                        </Link>
                        <p className="text-zelena">{e.price}€</p>
                        <button 
                            className="text-white bg-zelena rounded-full px-4 py-2 hover:text-[#DFDEDE] active:text-zelena active:bg-siva transition-all"
                            onClick={() => dispatch(addToCart({ ...e, quantity: 1 }))}
                        >DODAJ U KOŠARICU</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default SingledOutProducts