import React from 'react';
import Partner1 from '../../assets/partneri/1.jpg';
import Partner2 from '../../assets/partneri/2.jpg';
import Partner3 from '../../assets/partneri/3.jpg';

const Partners = () => {
  return (
    <div className="w-full sm:h-[384px] flex flex-col items-center gap-5 sm:px-[404px] px-12 py-[48px]">
      <h2 className="text-4xl">PARTNERI</h2>
      <div className="w-[128px] h-[4px] bg-zelena"></div>
      <div className="flex max-sm:flex-col w-full justify-between">
        <img 
            src={Partner1}
            alt="TerraCare"
          />
          <img 
            src={Partner2}
            alt="Ne znm"
          />
          <img 
            src={Partner3}
            alt="Oxygen Optimal"
          />
      </div>
    </div>
  )
}

export default Partners