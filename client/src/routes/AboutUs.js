import React, { useState } from 'react';

import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import Logo from '../assets/o-nama/TkoSmoMi.png';
import Office from '../assets/o-nama/NasePoslovnice.png';

import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

const questions = [
    { question: 'Koliki je rok isporuke?', answer: 'U pravilu, ukoliko je proizvod na stanju, 3-5 radna dana.' },
    { question: 'Šaljete li pakete za zemlje osim Hrvatske?', answer: 'Da, ukoliko želite naručiti nešto od proizvoda, kontaktirajte nas na info@odaberizdravlje.hr' },
    { question: 'Koji je način dostave?', answer: 'Sve pošiljke šaljemo putem Overseas Express-a.' },
    { question: 'Koje su mogućnosti plaćanja?', answer: 'Plaćanje prilikom preuzimanja/ pouzećem Online plaćanje karticom Bankovni prijenos' },
    { question: 'Zašto nemate besplatnu dostavu?', answer: 'Imamo, ukoliko potrošite više od 500kn pri narudžbi, dobivate besplatnu dostavu.' },
    { question: 'Kada mogu podnijeti reklamaciju?', answer: 'U roku od 14 dana od isporuke paketa.' },
    { question: 'Koja su moja prava u procesu reklamacije?', answer: 'U slučaju nedostatka na proizvodu, moguć je povrat novca. Također, imate pravo zahtijevati uklanjanje nedostataka zamjenom/ popravkom proizvoda.' },
    { question: 'Na koji način mogu podnijeti reklamaciju?', answer: 'Na stranicu povrati ili pozivom na 0800 330 022' },
]

const AboutUs = () => {
    const [showQuestion, setShowQuestion] = useState([false, false, false, false, false, false, false, false]);

    const onShowQuestion = (n) => {
        let temp = [];
        for (let i in showQuestion) {
            temp.push(showQuestion[i]);
        }
        temp[n] = !temp[n];
        setShowQuestion(temp);
    };

  return (
    <div className="page-container">
        <Nav />
        <Banner title="O NAMA" subtitle="POČETNA / O NAMA" />

        <div className="flex flex-col px-[376px] mt-[72px] mb-20">
            <div className="flex items-center gap-[48px]">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold">TKO SMO MI?</h2>
                    <p className=" text-lg opacity-80">Emisija Odaberi zdravlje nastala je kao odgovor na različite emisije o 
                        zdravlju kako bi na što pristupačniji način objasnila gledateljima što 
                        se dešava kod različitih dijagnoza ili zdravstvenih poteškoća, 
                        pomogla im da sami prepoznaju simptome i na vrijeme reagiraju.</p>
                    <p className=" text-lg opacity-80">U emisiji se konstantno naglašava važnost prevencije, pravilne i 
                        zdrave ishrane kao i tjelovježbe. Informiranje i edukacija s 
                        naglaskom na prevenciju, su naše osnovne vodilje. Uz pregršt 
                        informacija, interesantnih i aktualnih tema tu možete pronaći i 
                        zdrave i jednostavne recepte, različite vježbe kao i proizvode na 
                        prirodnoj bazi.</p>
                </div>

                <img 
                    src={Logo}
                    alt="Odaberi Zdravlje"
                    className="w-[568px] h-[568px]"
                />
            </div>

            <div className="flex flex-col mt-20 items-center gap-8">
                <h2 className="text-4xl font-semibold">NAŠE POSLOVNICE</h2>
                <div className="w-[128px] h-[4px] bg-zelena"></div>
                <div className="flex gap-[144px]">
                    <img 
                        src={Office}
                        alt="Lokacija naše poslovnice"
                        className="w-[570px] h-auto"
                    />
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <p className="text-zelena text-xl font-[600]">Trgovina</p>
                        <h3 className="text-3xl">ZAGREB</h3>
                        <p className="opacity-80 mt-2">Naša trgovina u Zagrebu nalazi se na</p>
                        <p className="opacity-80">adresi Trg Drage Iblera 10, na razini -1</p>
                        <p className="mt-2 text-zelena text-xl font-[600]">OD PONEDJELJKA DO PETKA</p>
                        <p className="font-[600]">OD 09:00 do 17:00</p>
                        <p className="mt-2 text-zelena text-xl font-[600]">SUBOTA I NEDJELJA</p>
                        <p className="font-[600]">ZATVORENO</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-8 mt-20">
                <h2 className="text-4xl font-semibold">ČESTA PITANJA</h2>
                <div className="w-[128px] h-[4px] bg-zelena"></div>
                <div className="grid grid-cols-2 w-full gap-x-[176px] gap-y-8">

                    {/* Questions list */
                        questions.map((e, index) => (
                            <div className="flex flex-col gap-2 items-center" key={index}>
                                <div 
                                    className="bg-siva px-[32px] py-[16px] flex items-center gap-2 w-full cursor-pointer 
                                    hover:opacity-80 active:bg-zelena transition-all"
                                    onClick={() => onShowQuestion(index)}
                                >
                                    <AiOutlinePlusSquare className={showQuestion[index] ? "hidden" : "text-zelena"} />
                                    <AiOutlineMinusSquare className={showQuestion[index] ? "text-zelena" : "hidden"} />
                                    <p className="font-semibold">{e.question}</p>
                                </div>

                                <p className={showQuestion[index] ? 'w-full px-8' : 'hidden'}>
                                    {e.answer}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default AboutUs