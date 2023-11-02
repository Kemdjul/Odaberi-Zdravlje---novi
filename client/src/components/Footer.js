import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import axios from 'axios';

const Footer = () => {
    /* Email subscription logic */
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const temp = email;
        const postEmail = async () => {
            try {
                await axios.post("http://localhost:3300/pretplaceni-mail", { email: temp });
            } catch(err) {
                console.error(err.response.data);
            }
        }
        postEmail();
    }

  return (
    <div className="w-full h-[344px] px-8 grid grid-rows-2 grid-cols-3 items-center justify-between">
        <img 
            src={Logo}
            alt="Odaberi Zdravlje"
            className="h-full w-auto"
        />

        <div className="flex flex-col items-center gap-2 w-[570px]">
            <h3 className="text-2xl font-semibold">NEWSLETTER</h3>
            <p className="opacity-80 mt-4">Budite uvijek prvi koji će znati sve naše popuste,</p>
            <p className="opacity-80">akcije, novosti i mnogo više od toga...</p>

            <form className="flex justify-between w-full mt-8 border-b-2 border-black border-opacity-80" onSubmit={handleSubmit}>
                <input type="email" className="outline-none w-[50%]" value={email} onChange={e => setEmail(e.target.value)} />
                <button type="submit" className="text-zelena">PRETPLATI SE</button>
            </form>
        </div>

        <div className="flex flex-col items-end gap-4">
            <h3 className=" w-36 text-xl font-semibold">KATEGORIJE</h3>
            <ul className="opacity-90 flex flex-col gap-2">
                <li>Trgovina</li>
                <li>Kontakt</li>
                <li>Praćenje pošiljke</li>
                <li>Povrati</li>
                <li>Terms & Conditions</li>
            </ul>
        </div>

        <div className="flex items-center gap-4 text-gray-500 ml-10">
            <a href='https://www.facebook.com/odaberi.zdravlje/?locale=hr_HR'>
                <FaFacebookF className="text-xl" />
            </a>
            <a href='https://www.instagram.com/odaberizdravlje'>
                <BsInstagram className="text-xl" />
            </a>
            <a href='https://www.youtube.com/channel/UCCUJSC0FpVuuuNLIZ76eoUQ'>
                <BsYoutube className="text-2xl" />
            </a>
        </div>

        <p className="text-center">© 2023, <span className="text-zelena">ODABERI-ZDRAVLJE</span>. Sva prava zadržana.</p>

        <div>
            
        </div>
    </div>
  )
}

export default Footer