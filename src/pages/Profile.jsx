import React, { useEffect } from "react";
// import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub, FaBriefcase, FaMapMarkedAlt } from 'react-icons/fa';
//testando commits

import { api } from "../server/api";
import { UseMyContext } from "../context/MyContext";


export function Links() {
  const Context = UseMyContext();

  useEffect(() => {
    async function apis() {
      await api(Context);
    }

    apis();
  }, []);



  return (
    <div className="ml-10 ">
      <div className='rounded-3xl mt-3 bg-[#4b4661] drop-shadow-xl'>
        <div className="p-10 mx-1 my-1 text-center">
          <img src={Context.avatar} alt="Foto Perfil GitHub" className="animate-pulse border-lime-500 border-2 rounded-full w-32 h-32 ml-16" /><br />
          <div>
            <h1 className="font-bold text-xl hover:text-white">{Context.name}</h1>
            <h2 className="mt-1">{Context.bio}</h2>
          </div>
        </div>
      </div>
      <div className="rounded-3xl mt-5 drop-shadow-xl bg-[#4b4661]">
        <div className='p-10 mx-2 my-1 container w-80'>
          <div className="flex items-center my-3">
            <h1 className="ml-3 text-1xl font-bold text-violet-500 hover:text-white">{Context.location}</h1>
          </div>
          <div className="flex items-center my-3">
            <h1 className="ml-3 text-1xl font-bold text-violet-500 hover:text-white">{Context.company}</h1>
          </div>
          <div className="flex items-center my-3">
          <h1 className="ml-3 text-1xl font-bold text-violet-500 hover:text-white">{Context.login}</h1>
        </div>
        <div className="flex items-center my-3">
          <h1 className="ml-3 text-1xl font-bold text-violet-500 hover:text-white">{Context.blog}</h1>
        </div>
        <div className="flex items-center my-3">
            <h1 className="ml-3 text-1xl font-bold text-violet-500 hover:text-white">{Context.ttUser}</h1>
      </div >
      <div className="flex items-center my-3">
        <h1 className="text-1xl font-bold text-violet-500 ml-3 hover:text-white">schmvitoor@gmail.com</h1>
      </div>
    </div>
      </div >
      </div>
  );
}