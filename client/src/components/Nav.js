import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiFillCloseCircle, AiOutlineClose, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart, selectCart, selectTotalPrice } from '../store/cartSlice';

const Nav = () => {
    const navigate = useNavigate();
    /* Using location.pathname for outlining the current part of website */
    const location = useLocation();

    /* Fetching cart items from Redux, cart logic */
    const cart = useSelector(selectCart);
    const totalPrice = useSelector(selectTotalPrice);

    const dispatch = useDispatch();
    const onRemoveClick = (e) => {
        dispatch(removeFromCart(e));
    }

    /* Hiding/showing cart and registration/login */
    const [hideCart, setHideCart] = useState(1);
    const [hideLogin, setHideLogin] = useState(1);
    const [registration, setRegistration] = useState(0);
    
    const onHideCart = () => {
        setHideCart(!hideCart);
    }

    const onHideLogin = () => {
        setHideLogin(!hideLogin);
    }

    /* Search logic */
    const [showSearch, setShowSearch] = useState(0);
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/trgovina/${e.target[0].value}`);
    }

  return (
    <nav className="sticky top-0 sm:h-[136px] h-[80px] z-30">
        <div
            className={hideLogin ? "hidden" 
            : "w-full h-screen flex justify-center items-center absolute top-0 bg-[#D9D9D9]/50 z-30"}
        >

            {/* Registration form */}
            {registration ? 
            (
                <div className="w-[792px] h-[616px] px-[120px] bg-white flex flex-col items-center justify-center gap-16 rounded-lg">
                    <AiOutlineArrowLeft 
                        className="relative right-[320px] top-[32px] text-3xl text-[#DFDEDE] cursor-pointer" 
                        onClick={() => setRegistration(0)}
                    />
                    <AiOutlineClose 
                        className="relative left-[320px] bottom-[56px] text-3xl text-red-500 cursor-pointer"
                        onClick={() => { setRegistration(0); setHideLogin(1); }}
                    />
                    <h2 className="font-semibold text-4xl text-zelena relative bottom-[120px]">Registracija</h2>

                    <form className="w-full flex flex-col gap-2 items-center relative bottom-[120px]">
                        <input 
                            type="text"
                            name="username"
                            className="border-2 w-[376px] bg-[#DFDEDE] placeholder:text-[#999999] py-2 px-3 rounded-lg outline-none"
                            placeholder="Ime i prezime"
                            required
                        />
                        <input 
                            type="email"
                            name="email"
                            className="border-2 w-[376px] bg-[#DFDEDE] placeholder:text-[#999999] py-2 px-3 rounded-lg outline-none"
                            placeholder="Email"
                            required
                        />
                        <input 
                            type="password"
                            name="password" 
                            className="border-2 w-[376px] bg-[#DFDEDE] placeholder:text-[#999999] py-2 px-3 rounded-lg outline-none"
                            placeholder="Šifra"
                            required
                        />
                        <div className="flex gap-2 mt-6">
                            <input 
                                type="checkbox" 
                                name="suglasnost"
                                id="suglasnost"
                                required 
                            />
                            <label for="suglasnost" className="text-[#999999]">Pročitao/la sam i slažem se s uvjetima korištenja i odredbama web-stranice.</label>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type="checkbox" 
                                name="newsletter" 
                                id="newsletter"
                            />
                            <label for="newsletter" className="text-[#999999]">Pretplati me na naš newsletter.</label>
                        </div>
                        <button 
                            type="submit"
                            className="bg-zelena text-white w-full h-[56px] rounded-lg font-semibold text-2xl mt-6"
                        >Registriraj me</button>
                    </form>
                </div>
            ) 
            : (
                <div className="w-[792px] h-[616px] px-[192px] bg-white flex flex-col items-center justify-center gap-8 rounded-lg">

                    {/* Login form */}
                    <AiOutlineClose 
                        className="relative left-[320px] text-3xl text-red-500 cursor-pointer"
                        onClick={() => { setRegistration(0); setHideLogin(1); }}
                    />
                    <h2 className="font-semibold text-4xl text-zelena">Prijava</h2>
                    <form className="flex flex-col gap-2 w-full mt-8">
                        <input 
                            type="email" 
                            className="border-2 w-full bg-[#DFDEDE] placeholder:text-[#999999] py-2 px-3 rounded-lg outline-none"
                            placeholder="Email"
                            required
                        />
                        <input 
                            type="password" 
                            className="border-2 w-full bg-[#DFDEDE] placeholder:text-[#999999] py-2 px-3 rounded-lg outline-none mt-4"
                            placeholder="Šifra"
                            required
                        />
                        <p className="text-end text-[#999999]">Zaboravljena šifra?</p>
                        <button 
                            type="submit"
                            className="bg-zelena text-white w-full h-[56px] rounded-lg font-semibold text-2xl mt-4"
                        >Prijavi se</button>
                    </form>

                    <p className="text-[#999999]">Nemate račun? Registrirajte se odmah ili se ulogirajte putem Facebooka ili Gmaila</p>
                    <button
                        className="bg-zelena text-white w-[184px] h-[40px] flex justify-center items-center rounded-lg text-lg font-semibold"
                        onClick={() => setRegistration(1)}
                    >Registriraj se</button>

                </div>
            )}
        </div>

        {/* Cart */}
        <div 
            className={hideCart ? "hidden" 
            : "absolute top-0 w-[70%] h-screen bg-siva z-30 opacity-50"}
            onClick={onHideCart}    
        ></div>

        <div className={hideCart ? "hidden" : "absolute right-0 w-[30%] h-screen bg-white py-[56px] px-[56px] flex flex-col gap-4 items-center"}>
            <AiOutlineClose 
                className="absolute right-8 top-8 text-red-500 text-2xl cursor-pointer hover:opacity-50 transition-all" 
                onClick={onHideCart} 
            />
            <h2 className="text-3xl font-semibold">MOJA KOŠARICA</h2>

            <div className="w-full max-h-[800px] overflow-y-auto">
                {cart?.map((e) => (
                    <div className="w-full flex items-center justify-between">
                        <img 
                            src={require(`../assets/${e.src}`)}
                            alt={e.alt}
                            className="h-[120px] w-auto"
                        />

                        <div className="w-full px-8">
                            <h3>{e.name}</h3>
                            <p>{e.quantity}x {e.price}€</p>
                        </div>

                        <AiFillCloseCircle 
                            className="text-red-600 w-[64px] text-2xl cursor-pointer hover:opacity-50 transition-all" 
                            onClick={() => onRemoveClick(e.id)} 
                        />
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-between mt-4">
                <p>Ukupno:</p>
                <p>{totalPrice}€</p>
            </div>

            <Link 
                to='/kosarica' 
                className="w-full h-[70px] mt-4 flex justify-center items-center bg-zelena text-white rounded-2xl text-2xl font-semibold
                hover:text-[#CCCCCC] active:text-zelena active:bg-siva transition-all"
            >
                Vidi košaricu
            </Link>
            <button className="w-full h-[70px] bg-zelena text-white rounded-2xl text-2xl font-semibold
            hover:text-[#CCCCCC] active:text-zelena active:bg-siva transition-all">
                Plaćanje
            </button>
        </div>

        <div className="bg-zelena w-full h-[56px] sm:flex hidden items-center justify-between px-[120px] text-white">
            <p>Besplatan trošak dostave iznad 70 eura</p>
            <div className="flex gap-2">
                <p>0800 330 022</p>
                <div className="w-[1px] bg-white"></div>
                <p>
                    <button onClick={onHideLogin}>Prijava</button> 
                    / 
                    <button onClick={onHideLogin}>Registracija</button>
                </p>
            </div>
        </div>

        {/* Navbar */}
        <div className="sm:bg-gray-200 bg-zelena w-full h-[80px] flex items-center justify-between sm:px-[120px]">
            <Link to="/">
                <img 
                    src={Logo} 
                    alt="Odaberi Zdravlje" 
                    className="h-[64px] w-auto"
                />
            </Link>

            <ul className="sm:flex gap-10 text-l hidden">
                <li className={location.pathname === '/' ? 'text-zelena border-b-2 border-zelena' : 'hover:text-zelena transition-all'}>
                    <Link to="/">POČETNA</Link>
                </li>
                <li className={location.pathname === '/trgovina' ? 'text-zelena border-b-2 border-zelena' : 'hover:text-zelena transition-all'}>
                    <Link to="/trgovina">TRGOVINA</Link>
                </li>
                <li className={location.pathname === '/emisije' ? 'text-zelena border-b-2 border-zelena' : 'hover:text-zelena transition-all'}>
                    <Link to="/emisije">EMISIJE</Link>
                </li>
                <li className={location.pathname === '/novosti' ? 'text-zelena border-b-2 border-zelena' : 'hover:text-zelena transition-all'}>
                    <Link to="/novosti">NOVOSTI</Link>
                </li>
                <li className={location.pathname === '/o-nama' ? 'text-zelena border-b-2 border-zelena' : 'hover:text-zelena transition-all'}>
                    <Link to="/o-nama">O NAMA</Link>
                </li>
                <li className={location.pathname === '/kontakt' ? 'text-zelena border-b-2 border-zelena' : 'hover:text-zelena transition-all'}>
                    <Link to="/kontakt">KONTAKT</Link>
                </li>
            </ul>

            <ul className="sm:flex items-center gap-4 text-2xl hidden">
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        className={showSearch ? "bg-[#DFDEDE] border-[1px] border-[#999999] rounded-lg px-2 py-[1px] text-base outline-none" : "hidden" }
                        placeholder="Search"
                    />
                    <input
                        type="submit"
                        className="hidden"
                    />
                </form>
                <AiOutlineSearch onClick={() => setShowSearch(!showSearch)} className="cursor-pointer hover:text-zelena transition-all" />
                <AiOutlineHeart className="cursor-pointer hover:text-zelena transition-all" />
                <AiOutlineShoppingCart onClick={onHideCart} className="cursor-pointer hover:text-zelena transition-all" />
            </ul>
        </div>
    </nav>
  )
}

export default Nav;