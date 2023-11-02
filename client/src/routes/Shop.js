import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const Shop = () => {
    /* Search logic */
    const params = useParams();

    /* Products and cart logic */
    const [products, setProducts] = useState([]);
    const handleAddToCart = (e) => {
        dispatch(addToCart({ ...e, quantity: 1 }));
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:3300/proizvodi");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        } 
        fetchProducts();
    }, []);

    /* Slider logic */
    const [value, setValue] = useState(200);
    const onSliderDrag = (e) => {
        setValue(e.target.value);
    };
    /* Color and category logic */
    const [color, setColor] = useState('');
    const handleColor = (col) => {
        if (col === color) setColor('');
        else setColor(col);
    };

    const [category, setCategory] = useState('akcija');
    const onCategory = (kat) => {
        if (category === kat) setCategory('akcija');
        else setCategory(kat);
    };

    const dispatch = useDispatch();

  return (
    <div className="page-container">
        <Nav />
        <Banner title="TRGOVINA" subtitle="POČETNA / TRGOVINA" />
        
        <div className="w-full min-h-[904px] flex gap-[40px] px-[200px] pt-[56px] mb-[120px]">
            <div className="flex flex-col gap-[32px] min-w-[296px]">
                <div className="bg-siva flex flex-col gap-4 px-[32px] py-[24px]">
                    <h3 className="text-center text-xl font-semibold">KATEGORIJE</h3>

                    {/* Category list */}
                    <ul className="grid grid-cols-2 gap-y-2">
                        <li 
                            onClick={() => onCategory('Oxygen Optimal')}
                            className={category === 'Oxygen Optimal' ? 'text-zelena border-b-2 border-zelena cursor-pointer select-none' 
                            : 'cursor-pointer select-none hover:text-zelena transition-all'}
                        >Oxygen Optimal</li>
                        <li className="text-end">20</li>
                        <li 
                            onClick={() => onCategory('Dodaci prehrani')}
                            className={category === 'Dodaci prehrani' ? 'text-zelena border-b-2 border-zelena cursor-pointer select-none' 
                            : 'cursor-pointer select-none hover:text-zelena transition-all'}
                        >Dodaci prehrani</li>
                        <li className="text-end">20</li>
                        <li 
                            onClick={() => onCategory('Tinkture i čajevi')}
                            className={category === 'Tinkture i čajevi' ? 'text-zelena border-b-2 border-zelena cursor-pointer select-none' 
                            : 'cursor-pointer select-none hover:text-zelena transition-all'}
                        >Tinkture i čajevi</li>
                        <li className="text-end">20</li>
                        <li 
                            onClick={() => onCategory('Gelovi i kreme')}
                            className={category === 'Gelovi i kreme' ? 'text-zelena border-b-2 border-zelena cursor-pointer select-none' 
                            : 'cursor-pointer select-none hover:text-zelena transition-all'}
                        >Gelovi i kreme</li>
                        <li className="text-end">20</li>
                        <li 
                            onClick={() => onCategory('Biljna ljekarna')}
                            className={category === 'Biljna ljekarna' ? 'text-zelena border-b-2 border-zelena cursor-pointer select-none' 
                            : 'cursor-pointer select-none hover:text-zelena transition-all'}
                        >Biljna ljekarna</li>
                        <li className="text-end">20</li>
                        <li 
                            onClick={() => onCategory('Fit program')}
                            className={category === 'Fit program' ? 'text-zelena border-b-2 border-zelena cursor-pointer select-none' 
                            : 'cursor-pointer select-none'}
                        >Fit Program</li>
                        <li className="text-end">20</li>
                        <li 
                            onClick={() => onCategory('Zaštita i dezinfekcija')}
                            className={category === 'Zaštita i dezinfekcija' ? 
                            'text-zelena border-b-2 border-zelena cursor-pointer select-none' 
                            : 'cursor-pointer select-none'}
                        >Zaštita i dezinfekcija</li>
                        <li className="text-end">20</li>
                    </ul>
                </div>

                {/* Slider */}
                <div className="bg-siva flex flex-col gap-4 px-[32px] py-[24px]">
                    <h3 className="text-center text-xl font-semibold">CIJENA</h3>
                    <p className="text-center">do {value}€</p>
                    <input className="bg-zelena slider" defaultValue="200" type="range" min="0" max="200" onInput={onSliderDrag} />
                </div>

                <div className="bg-siva flex flex-col gap-4 px-[32px] py-[24px]">
                    <h3 className="text-center text-xl font-semibold">BOJA</h3>

                    {/* Color selection */}
                    <div className="flex justify-between">
                        <button 
                            onClick={() => handleColor('plava')} 
                            className={color === 'plava' ? "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#006CFF] border-[2px] border-[#555555]" 
                            : "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#006CFF]"}></button>
                        <button 
                            onClick={() => handleColor('crvena')} 
                            className={color === 'crvena' ? "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#FC3E39] border-[2px] border-[#555555]" 
                            : "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#FC3E39]"}></button>
                        <button 
                            onClick={() => handleColor('crna')} 
                            className={color === 'crna' ? "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#171717] border-[2px] border-[#555555]" 
                            : "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#171717]" }></button>
                        <button 
                            onClick={() => handleColor('zuta')} 
                            className={color === 'zuta' ? "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#FFF600] border-[2px] border-[#555555]" 
                            : "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#FFF600]" }></button>
                        <button 
                            onClick={() => handleColor('roza')} 
                            className={color === 'roza' ? "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#FF00B4] border-[2px] border-[#555555]" 
                            : "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#FF00B4]"}></button>
                        <button 
                            onClick={() => handleColor('bijela')} 
                            className={color === 'bijela' ? "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#EFDFDF] border-[2px] border-[#555555]" 
                            : "cursor-pointer w-[16px] h-[16px] rounded-full bg-[#EFDFDF]" }></button>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-[24px]">
                <div className="w-full h-[56px] px-[24px] flex gap-[48px] items-center bg-siva">
                    <p className="min-w-[64px]">9 od 104</p>
                    <div className="flex gap-2 min-w-[136px]">
                        <p>Sortiraj po</p>
                        <div>
                            <p>Cijeni</p>
                        </div>
                    </div>

                    <div className="flex gap-2 min-w-[64px]">
                        <p>Prikaži</p>
                        <p>9</p>
                    </div>

                    <div className="flex gap-2 w-full justify-end">
                        <BsFillGrid3X3GapFill />
                        <GiHamburgerMenu />
                    </div>
                </div>

                {/* Listing products */}
                <div className="grid grid-cols-3 gap-x-4 gap-y-8">
                    {products?.map((e, index) => {
                        if ((category === e.category || category === 'akcija')
                            && e.price <= value 
                            && (params.search ? e.name.toLowerCase().includes(params.search.toLowerCase()) : true)) 
                            return (
                                <div className="flex flex-col justify-between gap-2 items-center hover:text-zelena transition-all" key={index}>
                                    <Link to={`/proizvodi/${e.tag}`}>
                                        <img 
                                            src={require(`../assets/${e.src}`)}
                                            alt={e.alt}
                                            className="border cursor-pointer"
                                        />
                                    </Link>
                                    <Link to={`/proizvodi/${e.tag}`}>
                                        <h3 className="font-semibold text-lg tracking-wide">{e.name}</h3>
                                    </Link>
                                    <p className="text-zelena">{e.price}€</p>
                                    <button 
                                        className="text-white bg-zelena rounded-full px-4 py-2 hover:text-[#CCCCCC]
                                        active:text-zelena active:bg-siva transition-all"
                                        onClick={() => handleAddToCart(e)}
                                    >
                                        DODAJ U KOŠARICU
                                    </button>
                                </div>
                            ); else return '';
                    })}
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Shop