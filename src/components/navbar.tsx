import { Github, Twitter } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SmoothScrollLink from "./anchor";
export default function Navbar() {
  return (
    <div className="flex h-full">
      <div className="flex justify-between flex-col">
        <div>
          <h1 className="text-2xl font-bold">Lucas Rodrigues</h1>
          <h2 className="text-sm font-semibold">Software Engineer</h2>
          <div className="mt-5">
            <p className="w-80 text-xs text-muted-foreground">
              Engenheiro de software apaixonado por criar soluções inovadoras.
              Habilidades em <strong className="text-white">Next.js</strong>,{" "}
              <strong className="text-white ">TypeScript</strong>,{" "}
              <strong className="text-white">TailwindCSS</strong> e{" "}
              <strong className="text-white">SQL</strong>.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground  pl-3 ">
          <div className="w-[1px] blur-[3px] animate-pulse h-28 bg-white"></div>
          <div className="w-[1px] absolute h-28 bg-white"></div>
          <ul className="text-[10px] flex gap-1 flex-col font-bold">
            <SmoothScrollLink to="projetos">
              <li className="hover:text-white w-full group relative transform hover:translate-x-5 transition-transform cursor-pointer p-3">
                PROJETOS
              </li>
            </SmoothScrollLink>
            <SmoothScrollLink to="carreira">
              <li className="hover:text-white content group relative transform hover:translate-x-5 transition-transform cursor-pointer p-3 ">
                CARREIRA
              </li>
            </SmoothScrollLink>
            <SmoothScrollLink to="sobre">
              <li className="hover:text-white content group relative transform hover:translate-x-5 transition-transform cursor-pointer p-3 ">
                SOBRE
              </li>
            </SmoothScrollLink>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3 text-sm items-center">
            <a href="https://github.com/c4slu" target="_blank">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="mr-4">
                      <AvatarImage
                        src="https://github.com/c4slu.png"
                        alt="@c4slu"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Salve D</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </a>

            <a href="https://twitter.com/lcxrodrigues" target="_blank">
              <li className="flex gap-2 text-xs items-center hover:text-muted-foreground transition-colors">
                <Twitter className="animate-bounce" width={20} /> Twitter
              </li>
            </a>
            <a href="https://github.com/c4slu" target="_blank">
              <li className="flex gap-2 text-xs items-center hover:text-muted-foreground transition-colors">
                <Github className="animate-pulse" width={20} /> Github
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
