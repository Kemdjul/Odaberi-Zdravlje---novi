import React, { useState } from 'react';

const News = () => {
    const [blogovi, setBlogovi] = useState();

    return (
    <div className="w-full h-[784px] flex flex-col gap-4 items-center py-[80px] px-[328px]">
        <h2 className="text-4xl font-semibold">NOVOSTI</h2>
        <div className="w-[128px] h-[4px] bg-zelena"></div>
        <div className="flex flex-col">
            {blogovi?.map(e => (
                <div>
                    <img 
                        src={e.src}
                        alt={e.alt}
                    />
                    <p>{e.date}</p>
                    <h3>{e.name}</h3>
                    <p>{e.desc}</p>
                    <button>READ MORE</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default News