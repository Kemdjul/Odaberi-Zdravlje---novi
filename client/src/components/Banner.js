import React from 'react'

const Banner = ({ title, subtitle }) => {
  return (
    <div id="banner-universal" className="w-full h-[424px] flex flex-col gap-8 text-white justify-center items-center">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default Banner