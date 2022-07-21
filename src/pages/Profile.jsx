import React, { useEffect } from "react";

import { IconGitHub, IconLinked, IconMail, IconOffice, IconPing, IconTt } from '../Icons/index'

import { apiProfileGit } from "../server/apiGit";
import { UseMyContext } from "../context/MyContext";


export function Links() {
  const Context = UseMyContext();

  useEffect(() => {
    async function apiProfile() {
      await apiProfileGit(Context);
    }
    apiProfile();
  }, []);


  return (
    <div className="ml-10 ">
      <div className='rounded-3xl mt-3 bg-[#4b4661] drop-shadow-xl'>
        <div className="p-10 mx-1 my-1 text-center">
          <img src={Context.avatar} alt="Foto Perfil GitHub" className="animate-pulse border-lime-500 border-2 rounded-full w-32 h-32 ml-16" /><br />
          <div>
            <h1 className="font-bold text-xl text-white">{Context.name}</h1>
            <h2 className="mt-1">{Context.bio}</h2>
          </div>
        </div>
      </div>
      <div className="rounded-3xl mt-5 drop-shadow-xl bg-[#4b4661]">
        <div className='p-10 mx-2 my-1 container w-80'>
          <div className="flex items-center my-3">
            <IconPing />
            <h1 className="ml-3 text-1xl font-bold
            text-violet-500">{Context.location}</h1>
          </div>
          <div className="flex items-center my-3">
            <IconOffice />
            <h1 className="ml-3 text-1xl font-bold 
            text-violet-500">{Context.company}</h1>
          </div>
          <div className="flex items-center my-3">
            <IconGitHub />
            <a href='https://github.com/victorserpa' target="_blank" className="ml-3 text-1xl font-bold 
          text-violet-500 hover:text-white">{Context.login}</a>
          </div>
          <div className="flex items-center my-3">
            <IconLinked />
            <a href="https://www.linkedin.com/in/victorserpa/" target="_blank" className="ml-3 text-1xl font-bold 
          text-violet-500 hover:text-white">{Context.blog}</a>
          </div>
          <div className="flex items-center my-3">
            <IconTt />
            <a href="https://twitter.com/schmvitor" target="_blank" className="ml-3 text-1xl font-bold 
            text-violet-500 hover:text-white">{Context.ttUser}</a>
          </div >
          <div className="flex items-center my-3">
            <IconMail />
            <a href="mailto:schmvitoor@gmail.com" className="text-1xl font-bold 
        text-violet-500 ml-3 hover:text-white">schmvitoor@gmail.com</a>
          </div>
        </div>
      </div >
    </div>
  );
}