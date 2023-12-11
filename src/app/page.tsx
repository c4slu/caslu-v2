"use client";

import CardWorks from "@/components/card";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SiTypescript, SiJavascript, SiCss3, SiPython } from "react-icons/si";
import axios from "axios";
import CardCarrer from "@/components/cardCarrer";
import { motion } from "framer-motion"

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

export default function Home() {
  const [userData, setUserData] = useState<userData | null>(null);
  const [repoData, setRepoData] = useState<repo[] | null>(null);
  const [avatar, setAvatar] = useState("")
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true)

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
          setLoading(false)
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
          setLoading(false)
        } catch (error) {
          console.error("Erro na requisição:", error);
        }
      };
      getUserData();
      getReposData();
    };
  });

  return (
    <main className="">
      <div
        className={`flex w-screen fixed h-24 abolute top-0 ${scrolled ? "bg-gradient-to-t from-transparent to-black" : "bg-transparent"}`}
      ></div>
      <div className={`flex justify-center items-center h-screen `}>
        <div className="flex justify-between w-5/6 h-1/2">



          <div className="relative">

            <motion.div

              className="h-1/2 fixed">
              <Navbar />
            </motion.div>
          </div>
          {loading ? (
            <div className="w-full flex flex-col justify-center items-center">
              <span className="w-3 h-3 bg-white flex rounded-full animate-ping" />
            </div>
          ) : (
            <div
              className={`flex flex-col group-hover:bg-black gap-y-3 h-max w-1/2`}
              id="projetos"
            >
              <h1 className="text-1xl font-semibold">Projetos</h1>


              {repoData?.map((repo: any, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 70 }}
                  transition={
                    {
                      ease: [0, 0.71, 0.2, 1.01],
                      duration: 1,
                      delay: index * 0.2
                    }}
                  className="list-none"
                >
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
                </motion.li>

              )

              )}

              <div>
                <h1 id="carreira" className="text-1xl font-semibold mb-3">Carreira</h1>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="col-span-2">
                    <CardCarrer title="Analista de Dados Pleno II" company="TEL Centro de C." companyModelo="Presencial" periodo="ago 2022 – Momento" linkCarrer="https://www.tel.inf.br/" />
                  </div>
                  <div className="col-span-1">
                    <CardCarrer title="Analista de Dados Jr." company="TEL Centro de C." companyModelo="Presencial" periodo="abr 2022 – ago 2022" linkCarrer="https://www.tel.inf.br/" />
                  </div>
                  <div className="col-span-1">
                    <CardCarrer title="Assistente de Dados" company="TEL Centro de C." companyModelo="Presencial" periodo="jan 2022 – abr 2022" linkCarrer="https://www.tel.inf.br/" />
                  </div>
                  <div className="col-span-2">
                    <CardCarrer title="Control Desk" company="TEL Centro de C." companyModelo="Presencial" periodo="ago 2021 – jan 2022" linkCarrer="https://www.tel.inf.br/" />
                  </div>
                </div>
              </div>
              <div>
                <h1 id="sobre" className="text-1xl font-semibold mb-3">Sobre</h1>
                <div className="flex gap-5 mb-20 bg-[#0e0e0f] border p-5 rounded-lg">
                  <img className="bg-cover rounded-lg w-1/2 h-full" src="https://github.com/c4slu.png?.png" alt="" />
                  <p className=" text-xs text-muted-foreground">
                    Me chamo <strong className="text-white font-normal">Lucas Rodrigues</strong>, tenho 21 anos. Graduado em Design Gráfico pela UAM.
                    <br />
                    <br />
                    Sou um Analista de Dados com mais de <strong className="text-white font-normal">3 anos de experiência na área</strong>, atuando em nível pleno. Tenho ampla experiência como Software Engineer, com habilidades na criação de dashboards, páginas para extração e importação de dados em banco SQL Server, e desenvolvimento de landing pages, incluindo sites pessoais.
                    <br />
                    <br />
                    Possuo conhecimento avançado nas seguintes linguagens: <strong className="text-white font-normal">JavaScript, TypeScript, HTML, CSS, DAX, Python e SQL/MySQL</strong>. Minha experiência me permite lidar com análise de dados complexos e desenvolvimento de soluções eficientes.
                    <br />

                  </p>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </main >
  );
}
