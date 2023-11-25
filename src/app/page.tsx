"use client";

import CardWorks from "@/components/card";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { SiTypescript, SiJavascript, SiCss3, SiPython } from "react-icons/si";
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area";

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
}

export default function Home() {
  const [userData, setUserData] = useState<userData | null>(null);
  const [repoData, setRepoData] = useState<repo[] | null>(null);
  const username = process.env.NEXT_PUBLIC_USERNAME;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setUserData(response.data);
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
  });

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex justify-between w-2/3 h-1/2">
        <div className="relative">
          <div className="h-1/2 fixed ">
            <Navbar />
          </div>
        </div>

        <div
          className="flex flex-col group-hover:bg-black gap-3 h-max pb-64"
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
          <div id="sobre">
            <h1 className="text-1xl font-semibold">TDADADAechs</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
