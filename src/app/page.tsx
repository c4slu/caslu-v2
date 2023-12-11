"use client";

import CardWorks from "@/components/card";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SiTypescript, SiJavascript, SiCss3, SiPython } from "react-icons/si";
import axios from "axios";
import CardCarrer from "@/components/cardCarrer";
import Image from "next/image";

interface userData {
  name: string;
  public_repos: number;
  followers: number;
  avatar: string;
}

interface repo {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: string;
  language: string;
  html_url: string;
  avatar_url: string;
}

export default function Home({ avatar_url }: repo) {
  const [userData, setUserData] = useState<userData | null>(null);
  const [repoData, setRepoData] = useState<repo[] | null>(null);
  const [avatar, setAvatar] = useState("")
  const [scrolled, setScrolled] = useState(false);
  const username = process.env.NEXT_PUBLIC_USERNAME;


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      const getUserData = async () => {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}`
          );
          setUserData(response.data);
          setAvatar(response.data.avatar_url)
        } catch (error) {
          console.error("Erro na requisição:", error);
        }
      };
      const getReposData = async () => {
        try {
          const response = await axios.get(
            `https://api.github.com/users/${username}/repos`
          );
          const pinnedRepos = response.data.filter(
            (repo: any) => repo.description
          );

          setRepoData(pinnedRepos);
        } catch (error) {
          console.error("Erro na requisição:", error);
        }
      };
      getUserData();
      getReposData();
    };
  });

  return (
    <main>
      <div
        className={`w-screen fixed h-24 abolute top-0 ${scrolled ? "bg-gradient-to-t from-transparent to-black" : "bg-transparent"}`}
      ></div>
      <div className={`flex justify-center items-center h-screen `}>
        <div className="flex justify-between w-2/3 h-1/2">
          <div className="relative">
            <div className="h-1/2 fixed ">
              <Navbar />
            </div>
          </div>



          <div
            className={`flex flex-col group-hover:bg-black gap-3 h-max pb-64 `}
            id="projetos"
          >
            <h1 className="text-1xl font-semibold">Projetos</h1>
            {repoData?.map((repo: any) => (
              <CardWorks
                key={repo.id}
                icon={
                  repo.language === "Python" ? (
                    <SiPython />
                  ) : repo.language === "TypeScript" ? (
                    <SiTypescript />
                  ) : repo.language === "Css" ? (
                    <SiCss3 />
                  ) : repo.language === "JavaScript" ? (
                    <SiJavascript />
                  ) : (
                    <SiTypescript />
                  )
                }
                link={repo.html_url}
                framework={repo.language}
                title={repo.full_name}
                desc={repo.description}
                stars={repo.stargazers_count}
                className="group rounded-md"
              />
            ))}
            <div className="w-[30rem]">
              <h1 id="carreira" className="text-1xl font-semibold mb-3">Carreira</h1>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="col-span-2">
                  <CardCarrer title="Analista de Plan/MIS Pleno II" company="TEL Centro de C." companyModelo="Presencial" periodo="ago 2022 – Momento" linkCarrer="https://www.tel.inf.br/" />
                </div>
                <div className="col-span-1">
                  <CardCarrer title="Analista de Plan/MIS Jr." company="TEL Centro de C." companyModelo="Presencial" periodo="abr 2022 – ago 2022" linkCarrer="https://www.tel.inf.br/" />
                </div>
                <div className="col-span-1">
                  <CardCarrer title="Assistente de MIS" company="TEL Centro de C." companyModelo="Presencial" periodo="jan 2022 – abr 2022" linkCarrer="https://www.tel.inf.br/" />
                </div>
              </div>
            </div>
            <div>
              <h1 id="sobre" className="text-1xl font-semibold mb-3">Sobre</h1>
              <div>
                <Image src={avatar} alt="" width={100} height={100} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
