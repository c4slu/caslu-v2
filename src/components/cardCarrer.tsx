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
          <CardTitle className="text-base font-normal">{title}</CardTitle>
          <div className="flex gap-1">
            <a href={linkCarrer} target="_blank">
              <CardDescription className="text-xs underline underline-offset-4">{company}</CardDescription>
            </a>
            <CardDescription> • </CardDescription>
            <CardDescription className="text-xs">{companyModelo}</CardDescription>
          </div>
          <CardDescription className="text-xs">{periodo}</CardDescription>
        </CardHeader>
      </Card>
    </main>
  )
}