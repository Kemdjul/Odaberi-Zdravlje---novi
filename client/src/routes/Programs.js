import React, { useState } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import PlaceholderImage from '../assets/emisije-banner.jpg';
import Footer from '../components/Footer';

const allPrograms = [
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
    { src: PlaceholderImage, alt: "Emisija", name: "Emisija#1" },
];

const Programs = () => {
    const [programs, setPrograms] = useState([...allPrograms]);
  
    return (
    <div className="page-container">
        <Nav />
        <Banner title="EMISIJE" subtitle="POČETNA / EMISIJE" />

        <div className="w-full mt-[56px] flex justify-center text-white">
            <div className="w-[1168px] h-[480px] p-[72px] flex bg-zelena">
                <div className="flex flex-col gap-10">
                    <h2 className="text-5xl font-bold">ODABERI ZDRAVLJE</h2>
                    <p className="text-5xl font-semibold">Problemi s hladnim rukama i nogama</p>
                    <button className="w-[344px] h-[56px] mt-[56px] bg-white text-zelena">Cijela emisija</button>
                </div>

                <img 
                    src={PlaceholderImage}
                    alt="Problemi s hladnim rukama i nogama"
                    className="w-[500px] h-[343px] object-cover"
                />
            </div>
        </div>

        <div className="w-full mt-[56px] px-[368px] mb-32 gap-x-[32px] gap-y-[24px] grid grid-cols-3">
            {   /* Programs list */
                programs?.map((e, index) => (
                    <div className="flex flex-col gap-2 items-center" key={index}>
                        <img 
                            src={e.src}
                            alt={e.alt}
                            className="h-[368px] w-auto object-cover"
                        />

                        <h4 className="text-lg font-semibold">{e.name}</h4>
                        <a className="px-4 py-2 text-white bg-zelena">CIJELA EMISIJA...</a>
                    </div>
                ))
            }
        </div>
        <Footer />
    </div>
  )
}

export default Programs