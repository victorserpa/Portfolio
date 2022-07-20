import React, { useEffect, useState } from "react"
import axios from "axios";

import { getApiGitHub } from '../server/api'
// import { getApiGit } from '../server/repos'

import { IconBranch, IconFolder, IconStar } from "../Icons";

export function Projects() {
  const [reposName, setreposName] = useState("")
  const [descripRepo, setDescripRepo] = useState("")
  const [lang, setLang] = useState("")
  const [stars, setStars] = useState("")
  const [fork, setFork] = useState("")

  const [nameRepos, setNameRepos] = useState("")
  const [repoDescrip, setRepoDescrip] = useState("")
  const [langue, setLangue] = useState("")
  const [Starss, setStarss] = useState("")
  const [forks, setForks] = useState("")

  useEffect(() => {
    async function apis() {
      const { name, description, language, stargazers_count, forks } = await getApiGitHub("Palpite-box");


      setreposName(name);
      setDescripRepo(description);
      setLang(language);
      setStars(stargazers_count)
      setFork(forks)

      const x = await getApiGitHub("socialLinks");

      setNameRepos(x.name);
      setRepoDescrip(x.description);
      setLangue(x.language);
      setStarss(x.stargazers_count);
      setForks(x.forks)
    }

    apis();
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
          <div className=" md:shrink-0 mx-8 mt-5 rounded-3xl bg-[#4b4661] drop-shadow-xl w-96 hover:bg-[#413868]">
            <div className='flex items-center mt-9 mx-8'>
              <IconFolder />
              <p className=" h-4 ml-3 font-bold">{reposName}</p>
            </div>
            <div className="m-8 text-sm">
              <p id="reposNames">{descripRepo}</p>
            </div>
            <div className="flex items-center ml-8 mb-5">
              <IconStar />
              <p className="ml-1">{stars}</p>
              <div className="flex items-center ml-3">
                <IconBranch />
                <p className="ml-1">{fork}</p>
                <div className="ml-32 flex items-center w-24">
                  <p className="ml-5">{lang}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className="row ml-3 mt-5 rounded-3xl bg-[#4b4661] drop-shadow-xl w-96 hover:bg-[#413868]">
            <div className='flex items-center  h-4 mt-9 mx-8'>
              <IconFolder />
              <h1 className=" h-4 ml-3 font-bold">{nameRepos}</h1>
            </div>
            <div className="m-8 text-sm mb-20">
              <p>{repoDescrip}</p>
            </div>
            <div className="flex items-center ml-8">
              <IconStar />
              <p className="ml-1">{Starss}</p>
              <div className="flex items-center ml-3">
                <IconBranch />
                <p className="ml-1">{forks}</p>
                <div className="ml-32 flex items-center w-24">
                  <p className="ml-5">{langue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}