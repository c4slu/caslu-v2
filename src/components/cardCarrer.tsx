import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface CardCarrrerProps {
  title: string;
  company: string;
  companyModelo: string;
  periodo: string;
  linkCarrer?: string;
  className?: string;
}

import { cn } from "@/lib/utils";
export default function CardCarrer({ title, company, companyModelo, periodo, linkCarrer, className }: CardCarrrerProps) {


  return (
    <main>
      <Card className={cn("bg-[#0e0e0f] hover:bg-black hover:scale-105 transition", className)}>
        <CardHeader className="gap-2">
          <CardTitle className="xl:text-base md:text-base text-xs font-normal">{title}</CardTitle>
          <div className="xl:flex md:flex gap-1">
            <a href={linkCarrer} target="_blank">
              <CardDescription className="xl:text-xs md:text-xs text-[10px] underline  xl:underline-offset-4 md:underline-offset-4 underline-offset-2">{company}</CardDescription>
            </a>
            <CardDescription className="xl:block md:block hidden"> • </CardDescription>
            <CardDescription className="xl:text-xs md:text-xs text-[10px]">{companyModelo}</CardDescription>
          </div>
          <CardDescription className="xl:text-xs md:text-xs text-[10px]">{periodo}</CardDescription>
        </CardHeader>
      </Card>
    </main>
  )
}