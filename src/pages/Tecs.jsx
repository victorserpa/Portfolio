import React from "react";
import { FaJsSquare, FaHtml5, FaCss3, FaGit, FaNodeJs, FaReact } from 'react-icons/Fa';

export function Tecnolog() {
  return (
    <div className="ml-10 md:shrink-0">
      <div className="rounded-3xl bg-[#4b4661] drop-shadow-xl h-48 w-35">
        <div className="text-center mt-4 container items-center p-1 ">
          <div className="my-3">
            <h1 className="w-full text-center h-10 mt-3 font-bold">Tecnologias</h1>
          </div>
          <div className="ml-12 h-24">
          <div className="flex mx-10 items-center my-2 ">
            <div className="rounded-3xl bg-red-400 mr-2">
              <h1 className="flex text-black font-bold m-3"><FaJsSquare /></h1>
            </div>
            <div className="rounded-3xl bg-red-400 mr-2">
              <h1 className="flex m-3 text-black font-bold"><FaHtml5 className="hover:"/></h1>
            </div>
            <div className="rounded-3xl bg-red-400 mr-2">
              <h1 className="flex m-3 text-black font-bold"><FaCss3 className=" " /></h1>
            </div>
            <br />
          </div>
          <div className="flex mx-10 items-center">
            <div className="rounded-3xl bg-red-400 mr-2">
              <h1 className="flex m-3 text-black font-bold"><FaGit /></h1>
            </div>
            <div className="rounded-3xl bg-red-400 mr-2">
              <h1 className="flex m-3 text-black font-bold"><FaReact /></h1>
            </div>
            <div className="rounded-3xl bg-red-400 mr-2">
              <h1 className="flex m-3 text-black font-bold"><FaNodeJs /></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}