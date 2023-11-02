import React, { useState } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';

import PlaceholderImage from '../assets/Emisije/emisija15.jpg';
import Footer from '../components/Footer';

const allNews = [
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
    { src: PlaceholderImage, alt: "Dijabetičke kompilacije", name: "Dijabetičke kompilacije", desc: "Dijabetičke komplikacije su izrazito neugodne i narušavaju kvalitetu života, a jedan je od uzroka moždanog i srčanog udara koji mogu izazvati smrtan ishod.Osim smrtnog ishoda, učestale su bolesti popdds..." },
];

const News = () => {
    const [news, setNews] = useState([...allNews]);

  return (
    <div className="page-container">
        <Nav />
        <Banner title="NOVOSTI" subtitle="POČETNA / NOVOSTI" />

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

        <div className="w-full mt-[56px] px-[368px] mb-32 gap-x-[32px] gap-y-[48px] grid grid-cols-3">
            {   /* News list */
                news?.map((e, index) => (
                    <div className="flex flex-col gap-2 items-center" key={index}>
                        <img 
                            src={e.src}
                            alt={e.alt}
                            className="h-[368px] w-auto object-cover"
                        />

                        <h4 className="text-lg font-semibold">{e.name}</h4>
                        <p>{e.desc}</p>
                        <a className="px-8 py-2 mt-2 text-white bg-zelena">Pročitaj sve...</a>
                    </div>
                ))
            }
        </div>
        <Footer />
    </div>
  )
}

export default News