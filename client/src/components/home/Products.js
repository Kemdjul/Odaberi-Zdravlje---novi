import React, { useState } from 'react';
import { addToCart } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = ({ productList }) => {
    /* Category logic */
    const [category, setCategory] = useState('akcija');
    const onCategoryClick = (cat) => {
        setCategory(cat);
    }

    const dispatch = useDispatch();

  return (
    <div className="w-full sm:min-h-[904px] sm:max-h-[1440px] py-[80px] px-[120px] flex flex-col gap-4 items-center">
        <h2 className="text-4xl font-semibold">NAŠI PROIZVODI</h2>
        <div className="w-[128px] h-[4px] bg-zelena"></div>
        <p className="opacity-90">Pogledajte našu cijelu paletu proizvoda</p>

        {/* Listing categories */}
        <ul className="flex items-center gap-2">
            <li 
                className={category === 'akcija' ? 'cursor-pointer text-zelena border-b-2 border-zelena' 
                : 'cursor-pointer hover:text-zelena transition-all'} 
                onClick={() => onCategoryClick('akcija')}
            >
                AKCIJA
            </li>
            <div className="w-[1px] h-[33%] bg-black opacity-50"></div>
            <li  
                className={category === 'Oxygen Optimal' ? 'cursor-pointer text-zelena border-b-2 border-zelena' 
                : 'cursor-pointer hover:text-zelena transition-all'} 
                onClick={() => onCategoryClick('Oxygen Optimal')}
            >
                OXYGEN OPTIMAL
            </li>
            <div className="w-[1px] h-[33%] bg-black opacity-50"></div>
            <li  
                className={category === 'Dodaci prehrani' ? 'cursor-pointer text-zelena border-b-2 border-zelena' 
                : 'cursor-pointer hover:text-zelena transition-all'} 
                onClick={() => onCategoryClick('Dodaci prehrani')}
            >
                DODACI PREHRANI
            </li>
            <div className="w-[1px] h-[33%] bg-black opacity-50"></div>
            <li  
                className={category === 'Čajevi i tinkture' ? 'cursor-pointer text-zelena border-b-2 border-zelena' 
                : 'cursor-pointer hover:text-zelena transition-all'} 
                onClick={() => onCategoryClick('Čajevi i tinkture')}
            >
                ČAJEVI I TINKTURE
            </li>
            <div className="w-[1px] h-[33%] bg-black opacity-50"></div>
            <li  
                className={category === 'Gelovi i kreme' ? 'cursor-pointer text-zelena border-b-2 border-zelena' 
                : 'cursor-pointer hover:text-zelena transition-all'} 
                onClick={() => onCategoryClick('Gelovi i kreme')}
            >
                GELOVI I KREME
            </li>
        </ul>

        {/* Listing products */}
        <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-8">
            {productList?.map((e, index) => {
                if (e.category === category || category === 'akcija') return (
                    <div className="flex flex-col gap-2 items-center hover:text-zelena transition-all" key={index}>
                        <Link to={`/proizvodi/${e.tag}`} className="flex flex-col items-center">
                            <img 
                                src={require(`../../assets/${e.src}`)} 
                                alt={e.alt} 
                                className="border"
                            />
                            <h3 className="text-lg font-semibold tracking-widest">{e.name}</h3>
                        </Link>
                        <p className="text-zelena">{e.price}€</p>
                        <button 
                            className="bg-zelena px-4 py-2 rounded-full text-white hover:text-[#DFDEDE] active:text-zelena active:bg-siva transition-all"
                            onClick={() => dispatch(addToCart({ ...e, quantity: 1 }))}
                        >DODAJ U KOŠARICU</button>
                    </div>
                ); else return '';
            })}
        </div>
    </div>
  )
}

export default Products