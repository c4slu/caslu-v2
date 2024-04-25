"use client";

import CardWorks from "@/components/card";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SiTypescript, SiJavascript, SiCss3, SiPython } from "react-icons/si";
import axios from "axios";
import CardCarrer from "@/components/cardCarrer";
import { motion } from "framer-motion";

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
  const [avatar, setAvatar] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  const username = process.env.NEXT_PUBLIC_USERNAME;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    const getReposData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/c4slu/repos`
        );
        const pinnedRepos = response.data.filter(
          (repo: any) => repo.description
        );

        setRepoData(pinnedRepos);
        setLoading(false);
      } catch (error) {
        console.error("Erro na requisição:", error);
        setLoading(false);
      }
    };
    getReposData();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="">
      <div
        className={`flex w-screen fixed h-24 abolute top-0 ${
          scrolled
            ? "bg-gradient-to-t from-transparent to-black"
            : "bg-transparent"
        }`}
      ></div>
      <div className={`flex justify-center items-center h-screen `}>
        <div className="xl:flex xl:flex-row md:flex-row md:flex flex flex-col xl:justify-between md:justify-between md:w-5/6 xl:w-5/6 md:h-1/2 xl:h-1/2 h-full mt-20 items-center xl:items-start md:items-start">
          <div className="relative">
            <div className="h-1/2 xl:fixed md:fixed sm:block">
              <Navbar />
            </div>
          </div>
          {loading ? (
            <div className="w-full flex flex-col justify-center items-center">
              <span className="w-3 h-3 bg-white flex rounded-full animate-ping" />
            </div>
          ) : (
            <div
              className={`flex flex-col xl:mt-0 md:mt-0 mt-16 group-hover:bg-black gap-y-3 h-max xl:w-1/2 md:w-1/2 w-5/6`}
              id="projetos"
            >
              <h1 className="text-1xl font-semibold">Projetos</h1>

              {repoData?.map((repo: any, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 70 }}
                  animate={{ opacity: 1, x: 0 }}
                  // exit={{ opacity: 0, x: 70 }}
                  transition={{
                    ease: [0, 0.71, 0.2, 1.01],
                    duration: 1,
                    delay: index * 0.2,
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
              ))}
              <div>
                <h1 id="carreira" className="text-1xl font-semibold mb-3">
                  Carreira
                </h1>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="col-span-2">
                    <CardCarrer
                      title="Analista de Dados Pleno II"
                      company="TEL Centro de C."
                      companyModelo="Presencial"
                      periodo="ago 2022 – Momento"
                      linkCarrer="https://www.tel.inf.br/"
                    />
                  </div>
                  <div className="col-span-1">
                    <CardCarrer
                      title="Analista de Dados Jr."
                      company="TEL Centro de C."
                      companyModelo="Presencial"
                      periodo="abr 2022 – ago 2022"
                      linkCarrer="https://www.tel.inf.br/"
                    />
                  </div>
                  <div className="col-span-1">
                    <CardCarrer
                      title="Assistente de Dados"
                      company="TEL Centro de C."
                      companyModelo="Presencial"
                      periodo="jan 2022 – abr 2022"
                      linkCarrer="https://www.tel.inf.br/"
                    />
                  </div>
                  <div className="col-span-2">
                    <CardCarrer
                      title="Control Desk"
                      company="TEL Centro de C."
                      companyModelo="Presencial"
                      periodo="ago 2021 – jan 2022"
                      linkCarrer="https://www.tel.inf.br/"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h1 id="sobre" className="text-1xl font-semibold mb-3">
                  Sobre
                </h1>
                <div className="flex flex-col justify-center items-center gap-5 mb-20 bg-[#0e0e0f] border p-5 rounded-lg">
                  <div className="flex gap-0.5">
                    <img
                      className="bg-cover rounded-lg w-1/2 h-full"
                      src="https://github.com/c4slu.png?.png"
                      alt=""
                    />
                    <img
                      className="bg-cover rounded-lg w-1/2 h-full"
                      src="/avatar.jpeg"
                      alt=""
                    />
                  </div>
                  <p className="text-xs text-muted-foreground ">
                    Meu nome é{" "}
                    <strong className="text-white font-normal">
                      Lucas Rodrigues
                    </strong>
                    , tenho 22 anos e sou formado em Design Gráfico pela UAM.
                    <br />
                    <br />
                    Atualmente, atuo como Analista de Dados com mais de
                    <strong className="text-white font-normal">
                      3 anos de experiência na área
                    </strong>
                    . Tenho desenvolvido habilidades sólidas em análise de
                    dados, especialmente em manipulação e visualização, além de
                    contribuir para a criação de soluções eficazes.
                    <br />
                    <br />
                    Minha experiência abrange diversas áreas, incluindo{" "}
                    <strong className="text-white font-normal">
                      desenvolvimento de dashboards interativos e intuitivos
                    </strong>{" "}
                    para apresentação de insights de dados de forma acessível.
                    Além disso, possuo expertise em automação de processos
                    utilizando ferramentas como{" "}
                    <strong className="text-white font-normal">Selenium</strong>
                    , para a coleta de dados de fontes diversas, e{" "}
                    <strong className="text-white font-normal">
                      requisição de APIs
                    </strong>{" "}
                    para integrar informações de sistemas externos.
                    <br />
                    <br />
                    Também tenho conhecimento avançado em linguagens como{" "}
                    <strong className="text-white font-normal">
                      JavaScript, TypeScript, HTML, CSS, DAX, Python e SQL/MySQL
                    </strong>
                    . O que me permite lidar com análise de dados complexos e
                    desenvolver soluções eficientes para os desafios que surgem
                    no dia a dia.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
