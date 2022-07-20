import React from "react";
import { IconCss, IconGit, IconHtml, IconJs, IconNode, IconReact } from "../Icons";



export function Tecnolog() {
  return (
    <div className="ml-10 md:shrink-0">
      <div className="rounded-3xl bg-[#4b4661] drop-shadow-xl h-48 w-35 items-center">
        <div className="text-center mt-4 container items-center p-1">
          <div className="my-3">
            <h1 className="w-full h-10 mt-3 font-bold">Tecnologias</h1>
          </div>
          <div className=" h-24 items-center">
          <div className="mx-20 h-20">
            <div className="flex mx-10 items-center my-2 ">
              <div className="rounded-3xl mr-2">
                <IconJs className="hover"/>
                <h1 className="flex text-black font-bold m-3"></h1>
              </div>
              <div className="rounded-3xl mr-2">
                <IconReact />
                <h1 className="flex m-3 text-black font-bold"></h1>
              </div>
              <div className="rounded-3xl mr-2">
                <IconNode />
                <h1 className="flex m-3 text-black font-bold"></h1>
              </div>
              <br />
            </div>
            <div className="flex mx-10">
              <div className="rounded-3xl mr-2 mt-1">
                <IconGit />
                <h1 className="m-3 text-black font-bold"></h1>
              </div>
              <div className="rounded-3xl mr-2 mt-1">
                <IconCss />
                <h1 className="m-3 text-black font-bold"></h1>
              </div>
              <div className="rounded-3xl mr-2 mt-0">
                <IconHtml />
                <h1 className="flex text-black font-bold"></h1>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}