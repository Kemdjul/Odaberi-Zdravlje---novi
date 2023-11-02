import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div id="programs-banner" className="sm:px-0 px-4 w-full h-[600px] flex flex-col gap-2 items-center justify-center text-white sm:text-start text-center">
        <h2 className="font-semibold text-6xl">NOVE EMISIJE</h2>
        <p className="text-lg"> Uz pregršt informacija, interesantnih i aktualnih tema tu možete pronaći i zdrave i</p>
        <p className="text-lg">jednostavne recepte, različite vježbe kao i proizvode na prirodnoj bazi.</p>
        <Link to="/emisije" className="bg-zelena px-4 py-2 mt-8 hover:text-[#CCCCCC] active:text-zelena active:bg-siva transition-all">POGLEDAJ VIŠE...</Link>
    </div>
  )
}

export default Programs