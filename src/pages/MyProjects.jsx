import React, { useEffect } from "react";



import { apiRepos } from "../server/repos";
import { UseMyContext } from "../context/MyContext";
import { IconBranch, IconFolder, IconStar } from "../Icons";


export function Projects() {
  const Context = UseMyContext()
  
  useEffect(() => {
    async function apiRepos() {
      await apiRepos(Context);
    }
    apiRepos();
  }, []);
  
  
  
  return (
    <div>
      <div className="mx-8 mt-4 rounded-3xl bg-[#4b4661] drop-shadow-xl h-16 ">
        <div className='h-12'>
          <div className='flex items-center justify-between '>
            <h1 className="ml-4 p-5 font-bold">My Projects</h1>
            <a href='https://github.com/victorserpa' target='_blank' className="cursor-pointer mr-8 hover:text-white font-bold">Veja todos</a>
          </div>
        </div>
      </div>
      <div className="flex ml-12 md:max-w-full">
        <div className='flex'>
          <div className=" md:shrink-0 mx-8 mt-5 rounded-3xl bg-[#4b4661] drop-shadow-xl w-96">
            <div className='flex items-center mt-9 mx-8'>
              <IconFolder />
              <h1 className=" h-4 ml-3 font-bold">Nome Projeto</h1>
            </div>
            <div className="m-8 text-sm">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aspernatur expedita porro explicabo temp</p>
            </div>
            <div className="flex items-center ml-8 mb-5">
              <IconStar />
              <p className="ml-1">100</p>
              <div className="flex items-center ml-3">
                <IconBranch />
                <p className="ml-1">100</p>
                <div className="ml-32 flex items-center w-24">
                  <p className="ml-5">HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className="row ml-3 mt-5 rounded-3xl bg-[#4b4661] drop-shadow-xl w-96">
            <div className='flex items-center  h-4 mt-9 mx-8'>
              <IconFolder />
              <h1 className=" h-4 ml-3 font-bold">Nome Projeto</h1>
            </div>
            <div className="m-8 text-sm">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aspernatur expedita porro explicabo temp</p>
            </div>
            <div className="flex items-center ml-8">
              <IconStar />
              <p className="ml-1">100</p>
              <div className="flex items-center ml-3">
                <IconBranch />
                <p className="ml-1">100</p>
                <div className="ml-32 flex items-center w-24">
                  <p className="ml-5">HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}