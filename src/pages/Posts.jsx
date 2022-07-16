import React from "react";

import { UseMyContext } from "../context/MyContext";

export function Post() {
  const Context = UseMyContext();

  return (
    <div className="md:max-w-full">
      <div className="mx-8 mt-8 rounded-3xl bg-[#4b4661] drop-shadow-xl h-16">
        <div className='h-12'>
          <div className='flex items-center justify-between '>
            <h1 className="ml-4 p-5 font-bold">Recent Posts</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-8 rounded-3xl bg-[#4b4661] drop-shadow-xl h-52">
          <div>
            <div className='flex mx-8 mt-8 '>
              <img src={Context.avatar} alt="Foto de Perfil" className="mt-8 border-lime-500 border-2 rounded-full w-32 h-32" />
              <strong className="mt-10 mb-24 ml-5">Lorem ipsum dolor sit amet
                <br />
                <h2 className="font-normal mt-2">2 anos atrás</h2>
              </strong>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}